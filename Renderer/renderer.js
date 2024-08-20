// Select dropdown elements
const selectCategoria = document.querySelector('#categoriaProduto');
const selectGrupo = document.querySelector('#grupo');
const selectFornecedor = document.querySelector('#fornecedor');
const selectTamanhoLetras = document.querySelector('#tamanhoLetras');
const selectTamanhoNumeros = document.querySelector('#tamanhoNumeros');
const selectUnidadeMassa = document.querySelector('#unidadeDeMassa');
const selectMedidaVolume = document.querySelector('#medidaVolume');
const selectUnidadeComprimento = document.querySelector('#unidadeComprimento');
const selectUnidadeEstoque = document.querySelector('#unidadeEstoque');

// Select all the input fields
const inputCodigoEAN = document.querySelector('#codigoDeBarras');
const inputNomeProduto = document.querySelector('#nomeProduto');
const inputDescricao = document.querySelector('#descricao');
const inputMassa = document.querySelector('#massaNumero');
const inputMedidaQuantidade = document.querySelector('#medidaQuantidade');
const inputCorProduto = document.querySelector('#corProduto');
const inputQuantidadeEstoque = document.querySelector('#quantidadeEstoque');
const inputPrecoCompra = document.querySelector('#precoCompra');
const inputMarkup = document.querySelector('#markup');
const inputPrecoVenda = document.querySelector('#precoVenda');

// Button click event listener
document.querySelector('#btn-cadastrar').addEventListener('click', function () {

    // Get the values from the input fields and populate the object
    const produtoData = {
        "codigo_ean": inputCodigoEAN.value,
        "categoria_id": selectCategoria.value,
        "grupo_produto_id": selectGrupo.value,
        "nome_produto": inputNomeProduto.value,
        "descricao": inputDescricao.value,
        "tamanho_letras_id": selectTamanhoLetras.value,
        "tamanho_num_id": selectTamanhoNumeros.value,
        "unidade_massa_id": `${selectUnidadeMassa.value} ${inputMassa.value}`,
        "medida_volume_id": selectMedidaVolume.value,
        "medida_quantidade": inputMedidaQuantidade.value,
        "unidade_comprimento_id": selectUnidadeComprimento.value,
        "cor_produto": inputCorProduto.value,
        "quantidade_estoque": inputQuantidadeEstoque.value,
        "preco_compra": inputPrecoCompra.value,
        "markup": inputMarkup.value,
        "preco_venda": inputPrecoVenda.value,
        "unidade_estoque_id": selectUnidadeEstoque.value
    };

    // Call the function to post the new product
    postNewProduto(produtoData);
});

// Initialize the select dropdowns with data
getCategoriasProduto(selectCategoria);
getGruposProduto(selectGrupo);
getFornecedor(selectFornecedor);
getTamanhoLetras(selectTamanhoLetras);
getTamanhoNumeros(selectTamanhoNumeros);
getunidadeDeMassa(selectUnidadeMassa);
getMedidaVolume(selectMedidaVolume);
getunidadeComprimento(selectUnidadeComprimento);
getunidadeEstoque(selectUnidadeEstoque);



