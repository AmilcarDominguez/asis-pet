const { tipomascotaModel } = require ('../models/tipomascota-mascota.model');
const { sequelize } = require("./bd.service");
const { QueryTypes } = require("sequelize");

const list = async (query, pageStart = 1, pageLimit = 10) => {
  const tipomascotaModelResult = await tipomascotaModel.findAll();
  const tipomascotaArray = new Array();
  for (let i = 0; i < tipomascotaModelResult.length; i++) {
    const tipomascotaResult = tipomascotaModelResult[i];
    tipomascotaArray.push(tipomascotaResult.dataValues);
  }
  return tipomascotaArray;
}
const listFilter = async (query, pageStar = 1, pageLimit = 10) => {
  //const usuarioModelResult = await usuarioModel.findAll ();
  let tipomascotaResult = await sequelize.query(
    `SELECT * FROM tipomascota
                                                      WHERE (UPPER(tmas_nombre) LIKE :q)
                                                      ORDER BY tmas_codigo`,
    {
      replacements: {
        q: query ? "%" + query.toUpperCase() + "%" : "%",
      },
      //type: QueryTypes.SELECT
    }
  );
  tipomascotaResult = tipomascotaResult && tipomascotaResult[0] ? tipomascotaResult[0] : [];
  console.log("tipomascotaResult", tipomascotaResult);
  return tipomascotaResult;
};
const getById = async (tmas_codigo) => {
  const tipomascotaModelResult = await tipomascotaModel.findByPk(tmas_codigo);
  console.log("find codigo", tmas_codigo);
  if (tipomascotaModelResult) {
    return tipomascotaModelResult.dataValues;
  } else {
    return null;
  }
};

const create = async (data) => {
  console.log("create data", data);
  const tipomascotaModelResult = await tipomascotaModel.create(data);
  if (tipomascotaModelResult) {
    return tipomascotaModelResult.dataValues;
  } else {
    return null;
  }
};

const update = async (data) => {
  console.log("update data", data);
  const tipomascotaModelCount = await tipomascotaModel.update(data, {
    where: {
      tmas_codigo: data.tmas_codigo
    }
  });

  if (tipomascotaModelCount > 0) {
    const tipomascotaModelResult = await tipomascotaModel.findByPk(data.tmas_codigo);
    return tipomascotaModelResult.dataValues;
  } else {
    return null;
  }
};

const remove = async (tmas_codigo) => {
  console.log("borrar codigo ", tmas_codigo);
  const tipomascotaModelCount = await tipomascotaModel.destroy({
    where: {
      tmas_codigo: tmas_codigo
    }
  });

  if (tipomascotaModelCount > 0) {
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
  remove,
};
