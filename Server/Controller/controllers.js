const path = require('path');
const {
    getAllProdutos,
    findProductByBarcode,
    getCategoriaProduto,
    getGrupoProduto,
    getFornecedor,
    getTamanhoLetras,
    getTamanhoNumeros,
    getUnidadeMassa,
    getMedidaVolume,
    getUnidadeComprimento
} = require(path.join(__dirname, '../../db/model/product'));

const initializeDB = require('../../db/model/initializeDB');

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
    getCategoriaProduto: async (req, res) => {
        try {
            const categorias = await getCategoriaProduto();
            res.json(categorias);
        } catch (error) {
            console.error('Erro ao buscar Categoria de Produto:', error);
            res.status(500).json({ error: 'Erro ao buscar Categoria de Produto' });
        }
    },
    getGrupoProduto: async (req, res) => {
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
    getTamanhoLetras: async (req, res) => {
        try {
            const tamanhoLetras = await getTamanhoLetras();
            res.json(tamanhoLetras);
        } catch (error) {
            console.error('Erro ao buscar tamanhoLetras:', error);
            res.status(500).json({ error: 'Erro ao buscar tamanhoLetras' });
        }
    },
    getTamanhoNumeros: async (req, res) => {
        try {
            const tamanhoNumeros = await getTamanhoNumeros();
            res.json(tamanhoNumeros);
        } catch (error) {
            console.error('Erro ao buscar tamanhoNumeros:', error);
            res.status(500).json({ error: 'Erro ao buscar tamanhoNumeros' });
        }
    },
    getMedidaVolume: async (req, res) => {
        try {
            const medidaVolume = await getMedidaVolume();
            res.json(medidaVolume);
        } catch (error) {
            console.error('Erro ao busca MedidaVolume:', error);
            res.status(500).json({ error: 'Erro ao buscar MedidaVolume' });
        }
    },
    getUnidadeMassa: async (req, res) => {
        try {
            const unidadeMassa = await getUnidadeMassa();
            res.json(unidadeMassa);
        } catch (error) {
            console.error('Erro ao busca Unidade de Massa:', error);
            res.status(500).json({ error: 'Erro ao buscar Unidade de Massa' });
        }
    },
    getUnidadeComprimento: async (req, res) => {
        try {
            const unidadeComprimento = await getUnidadeComprimento();
            res.json(unidadeComprimento);
        } catch (error) {
            console.error('Erro ao busca Unidade de Comprimento:', error);
            res.status(500).json({ error: 'Erro ao buscar Unidade de Comprimento' });
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

// Exporta os controladores para uso em outras partes da aplicação
module.exports = controllers;

(async () => {
    try {
        // Inicializa o banco de dados
        await initializeDB();

        // Seu código para iniciar o aplicativo
        console.log("Aplicativo iniciado com sucesso.");
    } catch (error) {
        console.error("Falha ao inicializar o banco de dados ou iniciar o aplicativo:", error);
    }
})();
