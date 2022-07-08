const { timeStamp } = require("console");
const { DataTypes } = require('sequelize');
const { sequelize } = require("../services/bd.service");

const rolModel = sequelize.define(
    'rol', {
        rol_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        rol_fecha: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        rol_descripcion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        rol_usu_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    }, {
        tableName: 'rol',
        timestamps: false
    }
);

module.exports = {
    rolModel
};