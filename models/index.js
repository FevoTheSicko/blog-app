const User = require('./user');
const Paragraph = require('./paragraph');

Paragraph.belongsTo(User, {
    foreignKey: 'user_id',
})

User.hasMany(Paragraph, {
    foreignKey: 'user_id',
});




























module.exports = { User, Paragraph }