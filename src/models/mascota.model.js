const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const mascotaModel = sequelize.define(
    "mascota", {
        mas_codigo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        mas_nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mas_sexo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mas_raza: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mas_fecha_nacimiento: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        mas_notas: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mas_tipo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName: 'mascota',
        timestamps: false
    }
);
module.exports = {
    mascotaModel
};