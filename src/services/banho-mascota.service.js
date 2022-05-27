const { banhoModel } = require("../models/banho.model");
const { sequelize } = require("../bd.service.js");
const { QueryTypes } = require("sequelize");

const list = async(query, pageStart = 1, pageLimit = 10) => {
    const banhoModelResult = await banhoModel.findAll();

    const banhoArray = new Array();
    for (let i = 0; i < banhoModelResult.length; i++) {   
        const banhoResult = banhoModelResult[i];
        banhoArray.push(banhoResult.dataValues);
    }
    return banhoArray;
};

const getById = async(ban_codigo) => {
    const banhoModelResult = await banhoModel.findByPk(ban_codigo);
    console.log("find codigo", ban_codigo);
    if (banhoModelResult) {
        return banhoModelResult.dataValues;
    } else {
        return null;
    }
};

const create = async(data) => {
    console.log("create data", data);
    const banhoModelResult = await banhoModel.create(data);
    if (banhoModelResult) {
        return banhoModelResult.dataValues;
    } else {
        return null;
    }
};

const update = async(data) => {
    console.log("update data", data);
    const banhoModelCount = await banhoModel.update(data, {
        where: {
            ban_codigo: data.ban_codigo,
        },
    });

    if (banhoModelCount > 0) {
        const banhoModelResult = await banhoModel.findByPk(data.ban_codigo);
        return banhoModelResult.dataValues;
    } else {
        return null;
    }
};

const remove = async(ban_codigo) => {
    console.log("borrar codigo ", ban_codigo);
    const banhoModelCount = await banhoModel.destroy({
        where: {
            ban_codigo: ban_codigo
        },
    });

    if (banhoModelCount > 0) {
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