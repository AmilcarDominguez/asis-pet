const { rolModel } = require ('../models/rol-usuario.model');
const { sequelize } = require("./bd.service");
const { QueryTypes } = require("sequelize");

const list = async (query, pageStart = 1, pageLimit = 10) => {
  const rolModelResult = await rolModel.findAll();
  const rolArray = new Array();
  for (let i = 0; i < rolModelResult.length; i++) {
    const rolResult = rolModelResult[i];
    rolArray.push(rolResult.dataValues);
  }
  return rolArray;
}
const listFilter = async (query, pageStar = 1, pageLimit = 10) => {
  //const usuarioModelResult = await usuarioModel.findAll ();
  let rolResult = await sequelize.query(
    `SELECT * FROM rol
                                                      WHERE (rol_id::text LIKE :q
                                                      OR rol_fecha::text LIKE :q
                                                      OR UPPER(rol_descripcion) LIKE :q
                                                      OR rol_usu_id::text LIKE :q)
                                                      ORDER BY rol_id`,
    {
      replacements: {
        q: query ? "%" + query.toUpperCase() + "%" : "%",
      },
      //type: QueryTypes.SELECT
    }
  );
  rolResult = rolResult && rolResult[0] ? rolResult[0] : [];
  console.log("rolResult", rolResult);
  return rolResult;
};
const getById = async (rol_id) => {
  const rolModelResult = await rolModel.findByPk(rol_id);
  console.log("find id", rol_id);
  if (rolModelResult) {
    return rolModelResult.dataValues;
  } else {
    return null;
  }
};

const create = async (data) => {
  console.log("create data", data);
  const rolModelResult = await rolModel.create(data);
  if (rolModelResult) {
    return rolModelResult.dataValues;
  } else {
    return null;
  }
};

const update = async (data) => {
  console.log("update data", data);
  const rolModelCount = await rolModel.update(data, {
    where: {
      rol_id: data.rol_id
    }
  });

  if (rolModelCount > 0) {
    const rolModelResult = await rolModel.findByPk(data.rol_id);
    return rolModelResult.dataValues;
  } else {
    return null;
  }
};

const remove = async (rol_id) => {
  console.log("borrar id ", rol_id);
  const rolModelCount = await rolModel.destroy({
    where: {
      rol_id: rol_id
    }
  });

  if (rolModelCount > 0) {
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
