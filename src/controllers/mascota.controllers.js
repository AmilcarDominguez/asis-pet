const { Module } = require('module');
const mascotaService = require('../services/mascota.service');

const list = async(req, res) => {
    const mascota = await mascotaService.list(req.query.q);
    res.send({
        success: true,
        usuario
    });
}
const getById = async(req, res) => {
    const mascota = await mascotaService.getById(req.query.id);
    let jsonResultado = req.query;
    jsonResultado['success'] = true;
    jsonResultado['mascota'] = mascota;

    res.status(201).send(jsonResultado);
}

const create = async(req, res) => {
    const mascota = await mascotaService.create(req.body);
    res.status(202).send({
        success: true,
        mascota
    });
}

const update = async(req, res) => {
    const mascota = await mascotaService.update(req.body);
    res.status(202).send({
        success: true,
        mascota
    });
}

const remove = async(req, res) => {
    const booleanValue = await mascotaService.remove(req.params.id);
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