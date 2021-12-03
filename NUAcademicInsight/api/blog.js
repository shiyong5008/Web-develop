const { getDb, getNextSequence } = require('./db.js');

async function get(_, { id }) {
    const db = getDb();
    const blog = await db.collection('blogs').findOne({ id });
    return blog;
}

const PAGE_SIZE = 10;

async function list() {
    const db = getDb();
    const blogs = await db.collection('blogs').find({}).toArray();
    return blogs;
}

async function add(_, { blog }) {
    const db = getDb();
    const newBlog = Object.assign({}, blog);
    newBlog.createdDate = new Date();
    newBlog.id = await getNextSequence('blogs');
    const result = await db.collection('blogs').insertOne(newBlog);
    const savedBlog = await db.collection('blogs')
        .findOne({ _id: result.insertedId });

    return savedBlog;
}

module.exports = {
    get,
    list,
    add,
};