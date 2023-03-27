const { User } = require('../models');

const userdata = [
    {
        "username": "TestUser",
        "password": "password"
    },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;