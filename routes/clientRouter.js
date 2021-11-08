const express = require('express');
const clientRouter = express.Router();
const clientController = require('../controllers/clientController.js');

clientRouter.route('/')
    .get(clientController.getAll)
    .post(clientController.create)
    .delete(clientController.deleteAll)

clientRouter.route('/:id')
    .get(clientController.getOne)
    .patch(clientController.update)
    .delete(clientController.deleteOne)

module.exports = clientRouter;