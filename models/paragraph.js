const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');


class Paragraph extends Model { }

Paragraph.init(
    {
        id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING,

            unique: true,
        },
        paragraph: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id",
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscore: true,
        modelName: 'paragraph',
    }
)


module.exports = Paragraph
