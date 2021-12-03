const { getDb } = require('./db');

async function get(_, { id }) {
  const db = getDb();
  const profile = await db.collection('profiles').findOne({ id });
  return profile;
}

async function add(_, { profile }) {
  const db = getDb();

  const newProfile = Object.assign({}, profile);
  newProfile.id = profile.email;

  const result = await db.collection('profiles').insertOne(newProfile);
  const savedProfile = await db.collection('profiles')
    .findOne({ _id: result.insertedId });

  return savedProfile;
}

module.exports = {
  add,
  get,
};
