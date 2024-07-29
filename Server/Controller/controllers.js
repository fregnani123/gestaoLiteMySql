const path = require('path');
const { getData, findProductByBarcode } = require(path.join(__dirname, '../../db/model/product'));

const controllers = {
    getAllProducts: async (req, res) => {
        try {
            const produtos = await getData();
            res.json(produtos);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
    },

    findOneProduct: async (req, res) => {
        try {
            const barcode = req.params.codigoDeBarras; // Corrigido para req.params
            const produto = await findProductByBarcode(barcode);
            if (produto.length === 0) {
                return res.status(404).json({ error: 'Produto não encontrado' });
            }
            res.json(produto);
        } catch (error) {
            console.error('Erro ao buscar produto:', error);
            res.status(500).json({ error: 'Erro ao buscar produto' });
        }
    }
};

module.exports = controllers;


