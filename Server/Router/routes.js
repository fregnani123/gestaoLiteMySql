const express = require('express');
const Router = express.Router();

const controllers = require('../Controller/controllers');

Router.get('/produtos', controllers.getAllProducts);
Router.get('/categorias', controllers.getCategoriaProduto);
Router.get('/grupos', controllers.getGrupoProduto);
Router.get('/fornecedor', controllers.getFornecedor);
Router.get('/tamanhoLetras', controllers.getTamanhoLetras);
Router.get('/tamanhoNumeros', controllers.getTamanhoNumeros);
Router.get('/UnidadeMassa', controllers.getTamanhoNumeros);
Router.get('/produtos/:codigoDeBarras', controllers.findOneProduct);


module.exports = Router;