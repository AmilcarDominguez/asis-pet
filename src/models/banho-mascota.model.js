const { timeStamp } = require("console");
const { DataTypes } = require('sequelize');
const { sequelize } = require("../services/bd.service");

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
            allowNull: true,
        },
        ban_notas: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        tableName: 'banho',
        timestamps: false
    }
);

module.exports = {
    banhoModel
};