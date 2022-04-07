const { timeStamp } = require("console");
const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service.js");

const usuarioModel = sequelize.define(
    'usuario', {
        usu_codigo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        usu_nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        usu_correo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        usu_contra: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName: 'usuario',
        timestamp: false
    }
);

module.exports = {
    usuarioModel,
};