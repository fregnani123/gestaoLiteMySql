const express = require('express');
const Router = express.Router();

const controllers = require('../Controller/controllers');

Router.get('/produtos', controllers.getAllProducts);
Router.get('/produtos/:codigoDeBarras', controllers.findOneProduct);


module.exports = Router;