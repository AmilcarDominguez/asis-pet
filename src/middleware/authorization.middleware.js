// const { usuarioModel } = require("../models/usuario.model");
const { sequelize } = require("../services/bd.service");
const { QueryTypes } = require("sequelize");

const authorization = async (request, response, next) => {
  const token = request.headers["authorization"];
  console.log("Header Auth", request.headers["authorization"]);
  // verificar si el token existe en la bd
  let usuarioResult = await sequelize.query(
                                          `SELECT usu_codigo, usu_nombre, usu_token
                                           FROM usuario
                                           WHERE usu_token = :t`,
    {
      replacements: {
        t: token,
      },
      //type: QueryTypes.SELECT,
    }
  );
  usuarioResult = usuarioResult && usuarioResult[0] ? usuarioResult[0] : [];
  console.log("Este es usuario result",usuarioResult);

  if (usuarioResult && usuarioResult.length > 0) {
    request.usuarioId = usuarioResult[0].usu_codigo;
    console.log("Este es usuarioId",request.usuarioId);
    next();
  } else {
    //throw new Error ("No se encontro el usuario");
    response.send({
      success: false,
      error: "no se pudo autenticar",
    });
  }
};

module.exports = {
  authorization,
};
