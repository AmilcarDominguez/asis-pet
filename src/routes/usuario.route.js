const usuarioController = require('../controllers/usuario.controllers');
const authorizationMiddleware = require("../middleware/authorization.middleware");

module.exports = (app) => {

    app.get('/usuarios',usuarioController.list);
    app.get('/usuario-filter', usuarioController.listFilter);
    app.get('/usuario/find/:id', usuarioController.getById);
    app.post('/usuario/create',usuarioController.create);
    app.put('/usuario/update',usuarioController.update);
    app.delete('/usuario/remove/:id',usuarioController.remove);
    app.post('/usuario/login', usuarioController.login);
    app.post('/usuario/logout', authorizationMiddleware.authorization,usuarioController.logout); 
}