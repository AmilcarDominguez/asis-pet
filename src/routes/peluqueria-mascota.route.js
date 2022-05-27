const peluqueriaController = require('../controllers/peluqueria-mascota.controllers');

module.exports = (app) => {

    app.get('/peluquerias', peluqueriaController.list);
    app.get('/peluqueria/find/:id', peluqueriaController.getById);
    app.post('/peluqueria/create', peluqueriaController.create);
    app.put('/peluqueria/update', peluqueriaController.update);
    app.delete('/peluqueria/remove/:id', peluqueriaController.remove);
}