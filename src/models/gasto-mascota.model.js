const { timeStamp } = require("console");
const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service.js");

const gastoModel = sequelize.define(
    'gasto', {
        gas_codigo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        gas_descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gas_monto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        gas_fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        tableName: 'gasto',
        timestamp: false
    }
);

module.exports = {
    gastoModel,
};