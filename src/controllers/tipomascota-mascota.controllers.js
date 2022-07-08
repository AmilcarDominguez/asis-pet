const { Module } = require("module");
const tipomascotaService = require("../services/tipomascota-mascota.service");

const list = async (req, res) => {
  try {
    const tipomascota = await tipomascotaService.list(req.query.q);
    res.status(200).send({
      success: true,
      tipomascota,
    });
  } catch (error) {
    const tipomascota = await tipomascotaService.list(req.query.q);
    res.status(200).send({
      success: false,
      error: error.message,
    });
  }
};

const listFilter = async (req, res) => {
  try {
    const tipomascota = await tipomascotaService.listFilter(req.query.q);
  res.send({
    success: true,
    tipomascota,
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
    const tipomascota = await tipomascotaService.getById(req.params.id);
    let jsonResultado = req.query;
    jsonResultado["success"] = true;
    jsonResultado["tipomascota"] = tipomascota;

    res.status(201).send(jsonResultado);
  } catch (error) {
    console.log("paso aqui", error);
  }
};

const create = async (req, res) => {
  const tipomascota = await tipomascotaService.create(req.body);
  res.status(202).send({
    success: true,
    tipomascota,
  });
};

const update = async (req, res) => {
  const tipomascota = await tipomascotaService.update(req.body);
  res.status(202).send({
    success: true,
    tipomascota,
  });
};

const remove = async (req, res) => {
  const booleanValue = await tipomascotaService.remove(req.params.id);
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
