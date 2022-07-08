const rolController = require('../controllers/rol-usuario.controllers');

module.exports = (app) => {

    app.get('/rols', rolController.list);
    app.get('/rol-filter', rolController.listFilter);
    app.get('/rol/find/:id', rolController.getById);
    app.post('/rol/create', rolController.create);
    app.put('/rol/update', rolController.update);
    app.delete('/rol/remove/:id', rolController.remove);
}