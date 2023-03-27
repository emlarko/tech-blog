const { Comment } = require('../models');

const commentdata = [
    {
        "blog_id": 1,
		"comment_description": "Test comment",
		"user_id": 1
    },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;