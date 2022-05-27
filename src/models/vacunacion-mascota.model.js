const { timeStamp } = require("console");
const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service.js");

const vacunacionModel = sequelize.define(
    'vacunacion', {
        vac_codigo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        vac_denominacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vac_fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        vac_notas: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'vacunacion',
        timestamp: false
    }
);

module.exports = {
    vacunacionModel,
};