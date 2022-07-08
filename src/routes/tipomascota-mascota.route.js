const tipomascotaController = require('../controllers/tipomascota-mascota.controllers');

module.exports = (app) => {

    app.get('/tipomascotas', tipomascotaController.list);
    app.get('/tipomascota-filter', tipomascotaController.listFilter);
    app.get('/tipomascota/find/:id', tipomascotaController.getById);
    app.post('/tipomascota/create', tipomascotaController.create);
    app.put('/tipomascota/update', tipomascotaController.update);
    app.delete('/tipomascota/remove/:id', tipomascotaController.remove);
}