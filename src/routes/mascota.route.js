const mascotaController = require('../controllers/mascota.controllers');

module.exports = (app) => {

    app.get('/mascotas', mascotaController.list);
    app.get('/mascota-filter', mascotaControllers.listFilter);
    app.get('/mascota/find/:id', mascotaController.getById);
    app.post('/mascota/create', mascotaController.create);
    app.put('/mascota/update', mascotaController.update);
    app.delete('/mascota/remove/:id', mascotaController.remove);
}