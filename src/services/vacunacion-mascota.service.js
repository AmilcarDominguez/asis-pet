const { vacunacionModel } = require("../models/vacunacion-mascota.model");
const { sequelize } = require("../services/bd.service.js");
const { QueryTypes } = require("sequelize");

const list = async(query, pageStart = 1, pageLimit = 10) => {
    const vacunacionModelResult = await vacunacionModel.findAll();

    const vacunacionArray = new Array();
    for (let i = 0; i < vacunacionModelResult.length; i++) {   
        const vacunacionResult = vacunacionModelResult[i];
        vacunacionArray.push(vacunacionResult.dataValues);
    }
    return vacunacionArray;
};

const getById = async(vac_codigo) => {
    const vacunacionModelResult = await vacunacionModel.findByPk(vac_codigo);
    console.log("find codigo", vac_codigo);
    if (vacunacionModelResult) {
        return vacunacionModelResult.dataValues;
    } else {
        return null;
    }
};

const create = async(data) => {
    console.log("create data", data);
    const vacunacionModelResult = await vacunacionModel.create(data);
    if (vacunacionModelResult) {
        return vacunacionModelResult.dataValues;
    } else {
        return null;
    }
};

const update = async(data) => {
    console.log("update data", data);
    const vacunacionModelCount = await vacunacionModel.update(data, {
        where: {
            vac_codigo: data.vac_codigo,
        },
    });

    if (vacunacionModelCount > 0) {
        const vacunacionModelResult = await vacunacionModel.findByPk(data.vac_codigo);
        return vacunacionModelResult.dataValues;
    } else {
        return null;
    }
};

const remove = async(vac_codigo) => {
    console.log("borrar codigo ", vac_codigo);
    const vacunacionModelCount = await vacunacionModel.destroy({
        where: {
            vac_codigo: vac_codigo
        },
    });

    if (vacunacionModelCount > 0) {
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