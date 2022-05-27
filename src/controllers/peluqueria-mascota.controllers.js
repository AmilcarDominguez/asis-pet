const { Module } = require('module');
const peluqueriaService = require('../services/peluqueria-mascota.service');

const list = async(req, res) => {
    const peluqueria = await peluqueriaService.list(req.query.q);
    res.send({
        success: true,
        peluqueria
    });
}
const getById = async(req, res) => {
    const peluqueria = await peluqueriaService.getById(req.query.id);
    let jsonResultado = req.query;
    jsonResultado['success'] = true;
    jsonResultado['peluqueria'] = peluqueria;

    res.status(201).send(jsonResultado);
}

const create = async(req, res) => {
    const peluqueria = await peluqueriaService.create(req.body);
    res.status(202).send({
        success: true,
        peluqueria
    });
}

const update = async(req, res) => {
    const peluqueria = await peluqueriaService.update(req.body);
    res.status(202).send({
        success: true,
        peluqueria
    });
}

const remove = async(req, res) => {
    const booleanValue = await peluqueriaService.remove(req.params.id);
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