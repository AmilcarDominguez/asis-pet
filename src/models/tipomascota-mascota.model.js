const { timeStamp } = require("console");
const { DataTypes } = require('sequelize');
const { sequelize } = require("../services/bd.service");

const tipomascotaModel = sequelize.define(
    'tipomascota', {
        tmas_codigo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        tmas_nombre: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        tableName: 'tipomascota',
        timestamps: false
    }
);

module.exports = {
    tipomascotaModel
};