const path = require('path');
const { getAllProdutos, findProductByBarcode, getCategoriaProduto, getGrupoProduto, getFornecedor } = require(path.join(__dirname, '../../db/model/product'));


const controllers = {
    getAllProducts: async (req, res) => {
        try {
            const produtos = await getAllProdutos();
            res.json(produtos);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
    },
    getCategoriaProduto : async (req, res) => {
        try {
            const categorias = await getCategoriaProduto();
            res.json(categorias);
        } catch (error) {
            console.error('Erro ao buscar Categoria de Produto:', error);
            res.status(500).json({ error: 'Erro ao buscar Categoria de Produto' });
        }
    },
    getGrupoProduto : async (req, res) => {
        try {
            const grupoProduto = await getGrupoProduto();
            res.json(grupoProduto);
        } catch (error) {
            console.error('Erro ao buscar grupo_produto:', error);
            res.status(500).json({ error: 'Erro ao buscar grupo_produto' });
        }
    },

    getFornecedor: async (req, res) => {
        try {
            const fornecedor = await getFornecedor();
            res.json(fornecedor);
        } catch (error) {
            console.error('Erro ao buscar fornecedor:', error);
            res.status(500).json({ error: 'Erro ao buscar fornecedor' });
        }
    },

    findOneProduct: async (req, res) => {
        try {
            const barcode = req.params.codigoDeBarras;
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


