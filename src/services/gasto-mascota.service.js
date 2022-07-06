const { gastoModel } = require("../models/gasto-mascota.model");
const { sequelize } = require("../services/bd.service.js");
const { QueryTypes } = require("sequelize");

const list = async(query, pageStart = 1, pageLimit = 10) => {
    const gastoModelResult = await gastoModel.findAll();

    const gastoArray = new Array();
    for (let i = 0; i < gastoModelResult.length; i++) {
        const gastoResult = gastoModelResult[i];
        gastoArray.push(gastoResult.dataValues);
    }
    return gastoArray;
};
const listFilter = async (query, query2, pageStar = 1, pageLimit = 10) => {
    //const usuarioModelResult = await usuarioModel.findAll ();
    let gastoResult = await sequelize.query(
      `SELECT *  FROM gasto
                                                        WHERE ((UPPER(gas_descripcion) LIKE :q
                                                        OR gas_monto ::text LIKE :q
                                                        OR gas_fecha ::text LIKE :q)
                                                        AND gas_mas_codigo ::text = :c)
                                                        ORDER BY gas_codigo`,
      {
        replacements: {
          q: query ? "%" + query.toUpperCase() + "%" : "%",
          c: (query2 ? '' + query2 + '' : ''),
        },
        //type: QueryTypes.SELECT
      }
    );
    gastoResult = gastoResult && gastoResult[0] ? gastoResult[0] : [];
    console.log("gastoResult", gastoResult);
    return gastoResult;
};

const getById = async(gas_codigo) => {
    const gastoModelResult = await gastoModel.findByPk(gas_codigo);
    console.log("find codigo", gas_codigo);
    if (gastoModelResult) {
        return gastoModelResult.dataValues;
    } else {
        return null;
    }
};

const create = async(data) => {
    console.log("create data", data);
    const gastoModelResult = await gastoModel.create(data);
    if (gastoModelResult) {
        return gastoModelResult.dataValues;
    } else {
        return null;
    }
};
const update = async(data) => {
    console.log("update data", data);
    const gastoModelCount = await gastoModel.update(data, {
        where: {
            gas_codigo: data.gas_codigo,
        },
    });

    if (gastoModelCount > 0) {
        const gastoModelResult = await gastoModel.findByPk(data.gas_codigo);
        return gastoModelResult.dataValues;
    } else {
        return null;
    }
};

const remove = async(gas_codigo) => {
    console.log("borrar codigo ", gas_codigo);
    const gastoModelCount = await gastoModel.destroy({
        where: {
            gas_codigo: gas_codigo
        },
    });

    if (gastoModelCount > 0) {
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