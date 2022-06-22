const { Module } = require('module');
const usuarioService = require('../services/usuario.service');

const list = async(req, res) => {
    try {
        const usuario = await usuarioService.list(req.query.q);
        res.status(200).send({
            success: true,
            usuario
        });  
    } catch (error) {
        const usuario = await usuarioService.list(req.query.q);
        res.status(200).send({
            success: false,
            error: error.message
        }); 
    }
}
const listFilter = async (req, res) => {
    const usuario = await usuarioService.list(req.query.q);
    res.send({
      success: true,
      usuario,
    });
}
const getById = async(req, res) => {
    const usuario = await usuarioService.getById(req.params.id);
    let jsonResultado = req.query;
    jsonResultado['success'] = true;
    jsonResultado['usuario'] = usuario;

    res.status(201).send(jsonResultado);
}

const create = async(req, res) => {
    const usuario = await usuarioService.create(req.body);
    res.status(202).send({
        success: true,
        usuario
    });
}

const update = async(req, res) => {
    const usuario = await usuarioService.update(req.body);
    res.status(202).send({
        success: true,
        usuario
    });
}

const remove = async(req, res) => {
    const booleanValue = await usuarioService.remove(req.params.id);
    res.status(202).send({
        success: booleanValue,
    });
}
const login = async(req, res) => {
    try {
        const usuario = await usuarioService.login(req.body);
        res.status(202).send({
            success: true,
            token : usuario.usu_token
        }); 
    } catch (error) {
        const usuario = await usuarioService.login(req.body);
        res.status(202).send({
            success: false,
            error: error.message
        });
    } 
}
const logout = async(req, res) => {
    const usuario = await usuarioService.logout(req.body);
    res.status(202).send({
        success: true,
        usuario
    });
}
module.exports = {
    list,
    listFilter,
    getById,
    create,
    update,
    remove,
    login,
    logout
};