const gastoController = require('../controllers/gasto-mascota.controllers');

module.exports = (app) => {

    app.get('/gastos', gastoController.list);
    app.get('/gasto-filter', gastoControllers.listFilter);
    app.get('/gasto/find/:id', gastoController.getById);
    app.post('/gasto/create', gastoController.create);
    app.put('/gasto/update', gastoController.update);
    app.delete('/gasto/remove/:id', gastoController.remove);
}