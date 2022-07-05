const { vacunaModel } = require("../models/vacuna-mascota.model");
const { sequelize } = require("./bd.service.js");
const { QueryTypes } = require("sequelize");

const list = async(query, pageStart = 1, pageLimit = 10) => {
    const vacunaModelResult = await vacunaModel.findAll();

    const vacunaArray = new Array();
    for (let i = 0; i < vacunaModelResult.length; i++) {   
        const vacunaResult = vacunaModelResult[i];
        vacunaArray.push(vacunaResult.dataValues);
    }
    return vacunaArray;
};
const listFilter = async (query, pageStart = 1, pageLimit = 10) => {

    let vacunaResult = await sequelize.query(`SELECT * FROM vacuna WHERE ( vac_mas_codigo = :q)
                                           ORDER BY vac_codigo`, {
        replacements: {
            q: (query ? '' + query + '' : '')
        },
        //type:QueryTypes.SELECT
    });
  
  
    vacunaResult = (vacunaResult && vacunaResult[0]) ? vacunaResult[0] : [];
  
    console.log("vacunaResult", vacunaResult);
  
    return vacunaResult;
  
  };
const getById = async(vac_codigo) => {
    const vacunaModelResult = await vacunaModel.findByPk(vac_codigo);
    console.log("find codigo", vac_codigo);
    if (vacunaModelResult) {
        return vacunaModelResult.dataValues;
    } else {
        return null;
    }
};

const create = async(data) => {
    console.log("create data", data);
    const vacunaModelResult = await vacunaModel.create(data);
    if (vacunaModelResult) {
        return vacunaModelResult.dataValues;
    } else {
        return null;
    }
};

const update = async(data) => {
    console.log("update data", data);
    const vacunaModelCount = await vacunaModel.update(data, {
        where: {
            vac_codigo: data.vac_codigo,
        },
    });

    if (vacunaModelCount > 0) {
        const vacunaModelResult = await vacunaModel.findByPk(data.vac_codigo);
        return vacunaModelResult.dataValues;
    } else {
        return null;
    }
};

const remove = async(vac_codigo) => {
    console.log("borrar codigo ", vac_codigo);
    const vacunaModelCount = await vacunaModel.destroy({
        where: {
            vac_codigo: vac_codigo
        },
    });

    if (vacunaModelCount > 0) {
        return true;
    } else {
        return false;
    }
};

module.exports = {
    list,
    listFilter,
    getById,
    create,
    update,
    remove
};