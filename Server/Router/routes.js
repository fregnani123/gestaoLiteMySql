const express = require('express');
const Router = express.Router();
const controllers = require('../Controller/controllers');

Router.get('/produtos', controllers.getAllProducts);
Router.get('/grupos', controllers.getSubGrupo);
Router.get('/sub-grupos', controllers.getGrupo);
Router.get('/fornecedor', controllers.getFornecedor);
Router.get('/tamanhoLetras', controllers.getTamanhoLetras);
Router.get('/tamanhoNumeros', controllers.getTamanhoNumeros);
Router.get('/unidadeMassa', controllers.getUnidadeMassa);
Router.get('/medidaVolume', controllers.getMedidaVolume);
Router.get('/unidadeComprimento', controllers.getUnidadeComprimento);
Router.get('/unidadeEstoque', controllers.getUnidadeEstoque);
Router.get('/corProduto', controllers.getCorProduto);
Router.get('/produtos/:codigoDeBarras', controllers.findOneProduct);
Router.post('/postNewProduto', controllers.postNewProduct);
Router.post('/uploadImagem', controllers.postImgProduct);

module.exports = Router;