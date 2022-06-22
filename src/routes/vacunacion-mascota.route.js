const vacunacionController = require('../controllers/vacunacion-mascota.controllers');

module.exports = (app) => {

    app.get('/vacunaciones', vacunacionController.list);
    app.get('/vacunacion-filter', vacunacionControllers.listFilter);
    app.get('/vacunacion/find/:id', vacunacionController.getById);
    app.post('/vacunacion/create', vacunacionController.create);
    app.put('/vacunacion/update', vacunacionController.update);
    app.delete('/vacunacion/remove/:id', vacunacionController.remove);
}