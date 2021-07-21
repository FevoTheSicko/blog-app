const { sequelize } = require('../models/user')
const userseed = require('./userseed')
const paragraphseed = require('./paragraphseed')

const seedall = async () => {
    await sequelize.sync({ force: true });
    await userseed();
    await paragraphseed();

    process.exit(0)
}
seedall()