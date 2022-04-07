const usuarioController = require('../controllers/usuario.controllers');

module.exports = (app) => {

    app.get('/usuarios', usuarioController.list);
    app.get('/usuario/find/:id', usuarioController.getById);
    app.post('/usuario/create', usuarioController.create);
    app.put('/usuario/update', usuarioController.update);
    app.delete('/usuario/remove/:id', usuarioController.remove);
}