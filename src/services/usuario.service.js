const { usuarioModel } = require("../models/usuario.model");
const { sequelize } = require("../services/bd.service.js");
const { QueryTypes } = require("sequelize");
const jwt = require("jsonwebtoken");

const list = async (query, pageStart = 1, pageLimit = 10) => {
  const usuarioModelResult = await usuarioModel.findAll();

  const usuarioArray = new Array();
  for (let i = 0; i < usuarioModelResult.length; i++) {
    const usuarioResult = usuarioModelResult[i];
    usuarioArray.push(usuarioResult.dataValues);
  }
  return usuarioArray;
};
const listFilter = async (query, pageStar = 1, pageLimit = 10) => {
  //const usuarioModelResult = await usuarioModel.findAll ();
  let usuarioResult = await sequelize.query(
    `SELECT * FROM usuario
                                                      WHERE (UPPER(usu_nombre) LIKE :q
                                                      OR UPPER(usu_correo) LIKE :q)
                                                      ORDER BY usu_codigo`,
    {
      replacements: {
        q: query ? "%" + query.toUpperCase() + "%" : "%",
      },
      //type: QueryTypes.SELECT
    }
  );
  usuarioResult = usuarioResult && usuarioResult[0] ? usuarioResult[0] : [];
  console.log("usuarioResult", usuarioResult);
  return usuarioResult;
};
const getById = async (usu_codigo) => {
  const usuarioModelResult = await usuarioModel.findByPk(usu_codigo);
  console.log("find codigo", usu_codigo);
  if (usuarioModelResult) {
    return usuarioModelResult.dataValues;
  } else {
    return null;
  }
};

const create = async (data) => {
  console.log("create data", data);
  const usuarioModelResult = await usuarioModel.create(data);
  if (usuarioModelResult) {
    return usuarioModelResult.dataValues;
  } else {
    return null;
  }
};

const update = async (data) => {
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

const remove = async (usu_codigo) => {
  console.log("borrar codigo ", usu_codigo);
  const usuarioModelCount = await usuarioModel.destroy({
    where: {
      usu_codigo: usu_codigo,
    },
  });

  if (usuarioModelCount > 0) {
    return true;
  } else {
    return false;
  }
};
const login = async (data) => {
  console.log("login data", data);
  //buscar usuario por nombre y contraseña
  let usuarioResult = await sequelize.query(
                                            `SELECT usu_codigo, usu_nombre, usu_token FROM usuario 
                                            WHERE usu_nombre = :n
                                            AND usu_contra = :p LIMIT 1`,
    {
      replacements: {
        n: data.usu_nombre,
        p: data.usu_contra,
      },
      //type: QueryTypes.SELECT,
    }
  );
  usuarioResult = usuarioResult && usuarioResult[0] ? usuarioResult[0] : [];
  console.log("usuarioResult", usuarioResult);
  if (usuarioResult && usuarioResult.length > 0) {
    if (usuarioResult[0].usu_token && usuarioResult[0].usu_codigo != '') {
      return {
        usu_token: usuarioResult[0].usu_token
      };
    } else {
      const payload = {
        usu_nombre: data.usu_nombre,
        usu_codigo: usuarioResult[0].usu_codigo
      };
      console.log("payload", payload);
      var token = jwt.sign(payload, "123456");

      let updateTokenUsuarioResult = await sequelize.query(
                                                   `UPDATE usuario 
                                                    SET usu_token = :t
                                                    WHERE usu_codigo = :i`,
        {
          replacements: {
            t: token,
            i: usuarioResult[0].usu_codigo,
          },
          //type: QueryTypes.UPDATE,
        }
      );
      return {
        usu_token: token,
      };
    }
  } else {
    throw new Error("Datos de nombre de usuario o contrasenha invalidos");
  }
};
const logout = async (usuarioId) => {
  let updateTokenUsuarioResult = await sequelize.query(
    `UPDATE usuario 
                                                    SET usu_token = null
                                                    WHERE usu_codigo = :i`,
    {
      replacements: {
        i: usuarioId
      },
      //type: QueryTypes.UPDATE,
    }
  );
  return;
};
module.exports = {
  list,
  listFilter,
  getById,
  create,
  update,
  remove,
  login,
  logout,
};
