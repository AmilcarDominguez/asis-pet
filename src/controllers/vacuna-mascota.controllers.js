const { Module } = require('module');
const vacunaService = require('../services/vacuna-mascota.service');

const list = async(req, res) => {
    try {
        const vacuna = await vacunaService.list(req.query.q);
        res.status(200).send({
          success: true,
          vacuna,
        });
      } catch (error) {
        const vacuna = await vacunaService.list(req.query.q);
        res.status(200).send({
          success: false,
          error: error.message,
        });
      }
}
const listFilter = async (req, res) => {
    const vacuna = await vacunaService.listFilter(req.query.q,req.query.i);
    res.send({
      success: true,
      vacuna,
    });
}

const getById = async(req, res) => {
    const vacuna = await vacunaService.getById(req.params.id);
    let jsonResultado = req.query;
    jsonResultado['success'] = true;
    jsonResultado['vacuna'] = vacuna;

    res.status(201).send(jsonResultado);
}

const create = async(req, res) => {
    const vacuna = await vacunaService.create(req.body);
    res.status(202).send({
        success: true,
        vacuna
    });
}

const update = async(req, res) => {
    const vacuna = await vacunaService.update(req.body);
    res.status(202).send({
        success: true,
        vacuna
    });
}

const remove = async(req, res) => {
    const booleanValue = await vacunaService.remove(req.params.id);
    res.status(202).send({
        success: booleanValue,
    });
}

module.exports = {
    list,
    listFilter,
    getById,
    create,
    update,
    remove
};