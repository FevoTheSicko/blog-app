const { User } = require('../models')

const userdata = [
    {
        id: 1,
        username: "user1",
        email: "user@1",
        password: "password1"
    },
    {
        id: 2,
        username: "user2",
        email: "user@2",
        password: "password2"
    },
    {
        id: 3,
        username: "user3",
        email: "user@3",
        password: "password3"
    },
    {
        id: 4,
        username: "user4",
        email: "user@4",
        password: "password4"
    },
]
const seedUserdata = () => User.bulkCreate(userdata)

module.exports = seedUserdata;