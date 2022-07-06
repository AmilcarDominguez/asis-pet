const usuarioController = require('../controllers/usuario.controllers');
const authorizationMiddleware = require("../middleware/authorization.middleware");

module.exports = (app) => {

    app.get('/usuarios',authorizationMiddleware.authorization,usuarioController.list);
    app.get('/usuario-filter',authorizationMiddleware.authorization, usuarioController.listFilter);
    app.get('/usuario/find/:id',authorizationMiddleware.authorization, usuarioController.getById);
    app.post('/usuario/create',usuarioController.create);
    app.put('/usuario/update',authorizationMiddleware.authorization, usuarioController.update);
    app.delete('/usuario/remove/:id',authorizationMiddleware.authorization, usuarioController.remove);
    app.post('/usuario/login', usuarioController.login);
    app.post('/usuario/logout',authorizationMiddleware.authorization, usuarioController.logout); 
}