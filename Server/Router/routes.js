const express = require('express');
const Router = express.Router();

const controllers = require('../Controller/controllers');

Router.get('/api/data', controllers.findProduto)


module.exports = Router;