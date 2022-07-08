const { Module } = require("module");
const rolService = require("../services/rol-usuario.service");

const list = async (req, res) => {
  try {
    const rol = await rolService.list(req.query.q);
    res.status(200).send({
      success: true,
      rol,
    });
  } catch (error) {
    const rol = await rolService.list(req.query.q);
    res.status(200).send({
      success: false,
      error: error.message,
    });
  }
};

const listFilter = async (req, res) => {
  try {
    const rol = await rolService.listFilter(req.query.q);
  res.send({
    success: true,
    rol,
  });
  } catch (error) {
    res.status(200).send({
      success: false,
      error: error.message,
    });
  }
  
}
const getById = async (req, res) => {
  try {
    const rol = await rolService.getById(req.params.id);
    let jsonResultado = req.query;
    jsonResultado["success"] = true;
    jsonResultado["rol"] = rol;

    res.status(201).send(jsonResultado);
  } catch (error) {
    console.log("paso aqui", error);
  }
};

const create = async (req, res) => {
  const rol = await rolService.create(req.body);
  res.status(202).send({
    success: true,
    rol,
  });
};

const update = async (req, res) => {
  const rol = await rolService.update(req.body);
  res.status(202).send({
    success: true,
    rol,
  });
};

const remove = async (req, res) => {
  const booleanValue = await rolService.remove(req.params.id);
  res.status(202).send({
    success: booleanValue,
  });
};

module.exports = {
  list,
  listFilter,
  getById,
  create,
  update,
  remove,
};
