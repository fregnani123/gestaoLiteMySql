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
const inputObservacoes = document.querySelector('#observacoes');
const inputMassa = document.querySelector('#massaNumero');
const inputVolume = document.querySelector('#volumeNumero');
const inputComprimento = document.querySelector('#comprimento');
const inputCorProduto = document.querySelector('#corProduto');
const inputQuantidadeEstoque = document.querySelector('#estoqueQtd');
const inputPrecoCompra = document.querySelector('#precoCusto');
const inputMarkup = document.querySelector('#markup');
const inputPrecoVenda = document.querySelector('#precoVenda');

const inputPathImg = document.querySelector('#produto-imagem');
const divImgProduct = document.querySelector('.quadro-img');

inputPathImg.onchange = function (event) {
    const file = event.target.files[0]; // O primeiro (e geralmente único) arquivo selecionado
    if (file) {
        const rendererImgProduct = document.createElement('img');
        rendererImgProduct.style.maxWidth = '100%'; // Garantir que a imagem não ultrapasse o contêiner

        const reader = new FileReader();

        reader.onload = function (e) {
            rendererImgProduct.src = e.target.result; // URL temporária da imagem
            divImgProduct.innerHTML = ''; // Limpa qualquer imagem anterior
            divImgProduct.appendChild(rendererImgProduct); // Adiciona a nova imagem ao div
        };

        reader.readAsDataURL(file); // Lê o arquivo como uma URL base64

        // Aqui você cria um caminho relativo para o arquivo.
        const relativePath = `images/${file.name}`;  
       inputPathImg.setAttribute('data-relative-path', relativePath); // Armazena o caminho relativo no dataset
    }
};

document.querySelector('#btn-cadastrar').addEventListener('click', function () {

    // Get the values from the input fields and populate the object
    const produtoData = {
        "codigo_ean": inputCodigoEAN.value,
        "nome_produto": inputNomeProduto.value,                                
        "categoria_id": selectCategoria.value,
        "grupo_produto_id": selectGrupo.value,
        "tamanho_letras_id": selectTamanhoLetras.value,
        "tamanho_num_id": selectTamanhoNumeros.value,
   
        "unidade_massa_qtd": inputMassa.value,
        "unidade_massa_id": selectUnidadeMassa.value,
        
        "medida_volume_qtd": inputVolume.value,
        "medida_volume_id": selectMedidaVolume.value,

        "unidade_comprimento_qtd": inputComprimento.value,
        "unidade_comprimento_id": selectUnidadeComprimento.value,

        "cor_produto": inputCorProduto.value,
        "observacoes": inputObservacoes.value,
        "quantidade_estoque": inputQuantidadeEstoque.value,
        "preco_compra": inputPrecoCompra.value,
        "markup": inputMarkup.value,
        "preco_venda": inputPrecoVenda.value,
        "unidade_estoque_id": selectUnidadeEstoque.value,
       
        "fornecedor_id": selectFornecedor.value,
        "caminho_img_produto": inputPathImg.getAttribute('data-relative-path')
    };
       
    postNewProduto(produtoData);


});


getCategoriasProduto(selectCategoria);
getGruposProduto(selectGrupo);
getFornecedor(selectFornecedor);
getTamanhoLetras(selectTamanhoLetras);
getTamanhoNumeros(selectTamanhoNumeros);
getunidadeDeMassa(selectUnidadeMassa);
getMedidaVolume(selectMedidaVolume);
getunidadeComprimento(selectUnidadeComprimento);
getunidadeEstoque(selectUnidadeEstoque);



