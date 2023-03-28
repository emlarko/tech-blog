const { Blog } = require('../models');

const blogdata = [
    {
        "title": "Test Blog",
        "description": "Test",
    },
    {
        "title": "Test Blog 2",
        "description": "Another Test",
    }
];

const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;
