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
const listFilter = async (query,query2, pageStar = 1, pageLimit = 10) => {
    //const mascotaModelResult = await mascotaModel.findAll ();
    let mascotaResult = await sequelize.query(
      `SELECT * FROM mascota
                                                        WHERE ((UPPER(mas_nombre) LIKE :q
                                                        OR UPPER(mas_sexo) LIKE :q
                                                        OR UPPER(mas_raza) LIKE :q
                                                        OR mas_fecha_nacimiento ::text LIKE :q
                                                        OR UPPER(mas_notas) LIKE :q
                                                        OR UPPER(mas_tipo) LIKE :q)
                                                        AND mas_usu_codigo ::text = :c)
                                                        ORDER BY mas_codigo`,
      {
        replacements: {
          q: query ? "%" + query.toUpperCase() + "%" : "%",
          c: (query2 ? '' + query2 + '' : ''),
        },
        //type: QueryTypes.SELECT
      }
    );
    mascotaResult = mascotaResult && mascotaResult[0] ? mascotaResult[0] : [];
    console.log("mascotaResult", mascotaResult);
    return mascotaResult;
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
        const mascotaModelResult = await mascotaModel.findByPk(data.mas_codigo);
        return mascotaModelResult.dataValues;
    } else {
        return null;
    }
}

const remove = async(mas_codigo) => {
    console.log("borrar codigo ", mas_codigo);
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
    listFilter,
    getById,
    create,
    update,
    remove
};