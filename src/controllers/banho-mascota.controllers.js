const { Module } = require('module');
const banhoService = require('../services/banho-mascota.service');

const list = async(req, res) => {
    const banho = await banhoService.list(req.query.q);
    res.send({
        success: true,
        banho
    });
}
const listFilter = async(req, res) => {
    const banho = await banhoService.list(req.query.q);
    res.send({
        success: true,
        banho
    });
}
const getById = async(req, res) => {
    const banho = await banhoService.getById(req.params.id);
    let jsonResultado = req.query;
    jsonResultado['success'] = true;
    jsonResultado['banho'] = banho;

    res.status(201).send(jsonResultado);
}

const create = async(req, res) => {
    const banho = await banhoService.create(req.body);
    res.status(202).send({
        success: true,
        banho
    });
}

const update = async(req, res) => {
    const banho = await banhoService.update(req.body);
    res.status(202).send({
        success: true,
        banho
    });
}

const remove = async(req, res) => {
    const booleanValue = await banhoService.remove(req.params.id);
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