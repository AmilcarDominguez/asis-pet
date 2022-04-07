const { usuarioModel } = require("../models/usuario.model");
const { sequelize } = require("./bd.service.js");
const { QueryTypes } = require("sequelize");

const list = async(query, pageStart = 1, pageLimit = 10) => {
    const usuarioModelResult = await usuarioModel.findAll();

    const usuarioArray = new Array();
    for (let i = 0; i < usuarioModelResult.length; i++) {
        const usuarioResult = usuarioModelResult[i];
        usuarioArray.push(usuarioResult.dataValues);
    }
    return usuarioArray;
};

const getById = async(usu_codigo) => {
    const usuarioModelResult = await usuarioModel.findByPk(usu_codigo);
    console.log("find codigo", usu_codigo);
    if (usuarioModelResult) {
        return usuarioModelResult.dataValues;
    } else {
        return null;
    }
};

const create = async(data) => {
    console.log("create data", data);
    const usuarioModelResult = await usuarioModel.create(data);
    if (usuarioModelResult) {
        return usuarioModelResult.dataValues;
    } else {
        return null;
    }
};

const update = async(data) => {
    console.log("update data", data);
    const usuarioModelCount = await usuarioModel.update(data, {
        where: {
            usu_codigo: data.usu_codigo,
        },
    });

    if (usuarioModelCount > 0) {
        const usuarioModelResult = await usuarioModel.findByPk(data.usu_codigo);
        return usuarioModelResult.dataValues;
    } else {
        return null;
    }
};

const remove = async(usu_codigo) => {
    console.log("borrar codigo ", usu_codigo);
    const usuarioModelCount = await usuarioModel.destroy({
        where: {
            usu_codigo: usu_codigo
        },
    });

    if (usuarioModelCount > 0) {
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