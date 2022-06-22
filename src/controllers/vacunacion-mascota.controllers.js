const { Module } = require('module');
const vacunacionService = require('../services/vacunacion-mascota.service');

const list = async(req, res) => {
    try {
        const vacunacion = await vacunacionService.list(req.query.q);
        res.status(200).send({
          success: true,
          vacunacion,
        });
      } catch (error) {
        const vacunacion = await vacunacionService.list(req.query.q);
        res.status(200).send({
          success: false,
          error: error.message,
        });
      }
}
const listFilter = async (req, res) => {
    const vacunacion = await vacunacionService.listFilter(req.query.q);
    res.send({
      success: true,
      vacunacion,
    });
}
const getById = async(req, res) => {
    const vacunacion = await vacunacionService.getById(req.params.id);
    let jsonResultado = req.query;
    jsonResultado['success'] = true;
    jsonResultado['vacunacion'] = vacunacion;

    res.status(201).send(jsonResultado);
}

const create = async(req, res) => {
    const vacunacion = await vacunacionService.create(req.body);
    res.status(202).send({
        success: true,
        vacunacion
    });
}

const update = async(req, res) => {
    const vacunacion = await vacunacionService.update(req.body);
    res.status(202).send({
        success: true,
        vacunacion
    });
}

const remove = async(req, res) => {
    const booleanValue = await vacunacionService.remove(req.params.id);
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