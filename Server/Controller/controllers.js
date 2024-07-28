const path = require('path');
const { getData } = require(path.join(__dirname, '../../db/queries'));


const controllers = {
    findProduto: async (req, res) => {
        try {
            const produtos = await getData();
            res.json(produtos);
        } catch (error) {
            // Lide com erros aqui
            console.error('Erro ao buscar produtos:', error);
            res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
    },
};

module.exports = controllers;

