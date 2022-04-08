const { Module } = require('module');
const gastoService = require('../services/gasto-mascota.service');

const list = async(req, res) => {
    const gasto = await gastoService.list(req.query.q);
    res.send({
        success: true,
        usuario
    });
}
const getById = async(req, res) => {
    const gasto = await gastoService.getById(req.query.id);
    let jsonResultado = req.query;
    jsonResultado['success'] = true;
    jsonResultado['gasto'] = gasto;

    res.status(201).send(jsonResultado);
}

const create = async(req, res) => {
    const gasto = await gastoService.create(req.body);
    res.status(202).send({
        success: true,
        gasto
    });
}

const update = async(req, res) => {
    const gasto = await gastoService.update(req.body);
    res.status(202).send({
        success: true,
        gasto
    });
}

const remove = async(req, res) => {
    const booleanValue = await gastoService.remove(req.params.id);
    res.status(202).send({
        success: booleanValue,
    });
}

module.exports = {
    list,
    getById,
    create,
    update,
    remove
};