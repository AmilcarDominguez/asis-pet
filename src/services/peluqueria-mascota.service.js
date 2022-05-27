const { peluqueriaModel } = require("../models/peluqueria-mascota.model");
const { sequelize } = require("../services/bd.service.js");
const { QueryTypes } = require("sequelize");

const list = async(query, pageStart = 1, pageLimit = 10) => {
    const peluqueriaModelResult = await peluqueriaModel.findAll();

    const peluqueriaArray = new Array();
    for (let i = 0; i < peluqueriaModelResult.length; i++) {   
        const peluqueriaResult = peluqueriaModelResult[i];
        peluqueriaArray.push(peluqueriaResult.dataValues);
    }
    return peluqueriaArray;
};

const getById = async(pel_codigo) => {
    const peluqueriaModelResult = await peluqueriaModel.findByPk(vac_codigo);
    console.log("find codigo", vac_codigo);
    if (peluqueriaModelResult) {
        return peluqueriaModelResult.dataValues;
    } else {
        return null;
    }
};

const create = async(data) => {
    console.log("create data", data);
    const peluqueriaModelResult = await peluqueriaModel.create(data);
    if (peluqueriaModelResult) {
        return peluqueriaModelResult.dataValues;
    } else {
        return null;
    }
};

const update = async(data) => {
    console.log("update data", data);
    const peluqueriaModelCount = await peluqueriaModel.update(data, {
        where: {
            pel_codigo: data.pel_codigo,
        },
    });

    if (peluqueriaModelCount > 0) {
        const peluqueriaModelResult = await peluqueriaModel.findByPk(data.pel_codigo);
        return peluqueriaModelResult.dataValues;
    } else {
        return null;
    }
};

const remove = async(pel_codigo) => {
    console.log("borrar codigo ", pel_codigo);
    const peluqueriaModelCount = await peluqueriaModel.destroy({
        where: {
            pel_codigo: pel_codigo
        },
    });

    if (peluqueriaModelCount > 0) {
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