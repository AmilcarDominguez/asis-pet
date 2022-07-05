const { timeStamp } = require("console");
const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service.js");

const vacunaModel = sequelize.define(
    'vacuna', {
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
        },
        vac_mas_codigo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        tableName: 'vacuna',
        timestamps: false
    }
);

module.exports = {
    vacunaModel,
};