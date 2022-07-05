const { Module } = require("module");
const gastoService = require("../services/gasto-mascota.service");

const list = async (req, res) => {
  try {
    const gasto = await gastoService.list(req.query.q);
    res.send({
      success: true,
      gasto,
    });
  } catch (error) {
    const gasto = await gastoService.list(req.query.q);
    res.status(200).send({
      success: false,
      error: error.message,
    });
  }
};
const listFilter = async (req, res) => {
  try {
    const gasto = await gastoService.listFilter(req.query.q);
  res.send({
    success: true,
    gasto,
  });
  } catch (error) {
    console.log(error);
    res.status(200).send({
      success: false,
      error: error.message,
    });
  }
  
};
const getById = async (req, res) => {
  const gasto = await gastoService.getById(req.params.id);
  let jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["gasto"] = gasto;

  res.status(201).send(jsonResultado);
};

const create = async (req, res) => {
  try {
    const gasto = await gastoService.create(req.body);
  res.status(202).send({
    success: true,
    gasto,
  });
  } catch (error) {
    console.log(error);
  }
  
};

const update = async (req, res) => {
  const gasto = await gastoService.update(req.body);
  res.status(202).send({
    success: true,
    gasto,
  });
};

const remove = async (req, res) => {
  const booleanValue = await gastoService.remove(req.params.id);
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
