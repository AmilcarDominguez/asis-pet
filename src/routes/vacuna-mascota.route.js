const vacunaController = require('../controllers/vacuna-mascota.controllers');

module.exports = (app) => {

    app.get('/vacunas', vacunaController.list);
    app.get('/vacuna-filter', vacunaController.listFilter);
    app.get('/vacuna/find/:id', vacunaController.getById);
    app.post('/vacuna/create', vacunaController.create);
    app.put('/vacuna/update', vacunaController.update);
    app.delete('/vacuna/remove/:id', vacunaController.remove);
}