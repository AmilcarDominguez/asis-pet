const { Module } = require("module");
const mascotaService = require("../services/mascota.service");

const list = async (req, res) => {
  try {
    const mascota = await mascotaService.list(req.query.q);
    res.status(200).send({
      success: true,
      mascota,
    });
  } catch (error) {
    const mascota = await mascotaService.list(req.query.q);
    res.status(200).send({
      success: false,
      error: error.message,
    });
  }
};
const listFilter = async (req, res) => {
  const mascota = await mascotaService.list(req.query.q);
  res.send({
    success: true,
    mascota,
  });
};
const getById = async (req, res) => {
  const mascota = await mascotaService.getById(req.params.id);
  let jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["mascota"] = mascota;

  res.status(201).send(jsonResultado);
};

const create = async (req, res) => {
  const mascota = await mascotaService.create(req.body);
  res.status(202).send({
    success: true,
    mascota,
  });
};

const update = async (req, res) => {
  const mascota = await mascotaService.update(req.body);
  res.status(202).send({
    success: true,
    mascota,
  });
};

const remove = async (req, res) => {
  const booleanValue = await mascotaService.remove(req.params.id);
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
