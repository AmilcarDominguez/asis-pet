const banhoController = require('../controllers/banho-mascota.controllers');

module.exports = (app) => {

    app.get('/banhos', banhoController.list);
    app.get('/banho-filter', banhoController.listFilter);
    app.get('/banho/find/:id', banhoController.getById);
    app.post('/banho/create', banhoController.create);
    app.put('/banho/update', banhoController.update);
    app.delete('/banho/remove/:id', banhoController.remove);
}