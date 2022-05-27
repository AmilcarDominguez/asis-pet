const { timeStamp } = require("console");
const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service.js");

const banhoModel = sequelize.define(
    'banho', {
        ban_codigo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        ban_fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        ban_notas: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'banho',
        timestamp: false
    }
);

module.exports = {
    banhoModel,
};