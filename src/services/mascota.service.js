const { mascotaModel } = require("../models/mascota.model");
const { sequelize } = require("../services/bd.service");
const { QueryTypes } = require("sequelize");

const list = async(query, pageStart = 1, pageLimit = 10) => {
    const mascotaModelResult = await mascotaModel.findAll();

    const mascotaArray = new Array();
    for (let i = 0; i < mascotaModelResult.length; i++) {
        const mascotaResult = mascotaModelResult[i];
        mascotaArray.push(mascotaResult.dataValues);
    }
    return mascotaArray;
};

const getById = async(mas_codigo) => {
    const mascotaModelResult = await mascotaModel.findByPk(mas_codigo);
    console.log("find codigo", mas_codigo);
    if (mascotaModelResult) {
        return mascotaModelResult.dataValues;
    } else {
        return null;
    }
};

const create = async(data) => {
    console.log("create data", data);
    const mascotaModelResult = await mascotaModel.create(data);
    if (mascotaModelResult) {
        return mascotaModelResult.dataValues;
    } else {
        return null;
    }
};

const update = async(data) => {
    console.log("update data", data);
    const mascotaModelCount = await mascotaModel.update(data, {
        where: {
            mas_codigo: data.mas_codigo,
        },
    });


    if (mascotaModelCount > 0) {
        const mascotaModelResult = await mascotaModel.findByPk(codigo);
        return mascotaModelResult.dataValues;
    } else {
        return null;
    }
};

const remove = async(usu_codigo) => {
    console.log("borrar codigo ", usu_codigo);
    const mascotaModelCount = await mascotaModel.destroy({
        where: {
            mas_codigo: mas_codigo
        },
    });

    if (mascotaModelCount > 0) {
        return true;
    } else {
        return false;
    }
};

module.exports = {
    list,
    getById,
    create,
    update,
    remove
};