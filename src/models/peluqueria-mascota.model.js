const { timeStamp } = require("console");
const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service.js");

const peluqueriaModel = sequelize.define(
    'peluqueria', {
        pel_codigo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        pel_fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        pel_notas: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pel_mas_codigo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        tableName: 'peluqueria',
        timestamps: false
    }
);

module.exports = {
    peluqueriaModel,
};