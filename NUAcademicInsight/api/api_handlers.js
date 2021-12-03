const fs = require('fs');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');

const GraphQLDate = require('./graphql_date');
const about = require('./about');
const review = require('./review');
const profile = require('./profiles');
const auth = require('./auth');
const blog = require('./blog');

const resolvers = {
  Query: {
    about: about.getMessage,
    user: auth.resolveUser,
    review: review.get,
    reviewList: review.list,
    profile: profile.get,
    blogList: blog.list,
    blog: blog.get,
  },
  Mutation: {
    setAboutMessage: about.setMessage,
    reviewAdd: review.add,
    reviewUpdate: review.update,
    reviewDelete: review.delete,
    profileAdd: profile.add,
    blogAdd: blog.add,
  },
  GraphQLDate,
};

function getContext({ req }) {
  const user = auth.getUser(req);
  return { user };
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
  resolvers,
  context: getContext,
  formatError: (error) => {
    console.log(error);
    return error;
  },
  playground: true,
  introspection: true,
});

function installHandler(app) {
  const enableCors = (process.env.ENABLE_CORS || 'true') === 'true';
  console.log('CORS setting:', enableCors);
  let cors;
  if (enableCors) {
    const origin = process.env.UI_SERVER_ORIGIN || 'http://localhost:8000';
    const methods = 'POST';
    cors = { origin, methods, credentials: true };
  } else {
    cors = 'false';
  }
  server.applyMiddleware({ app, path: '/graphql', cors });
}

module.exports = { installHandler };
