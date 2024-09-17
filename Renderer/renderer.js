// Select dropdown elements
const selectGrupo = document.querySelector('#categoriaProduto');
const selectSubGrupo = document.querySelector('#grupo');
const selectFornecedor = document.querySelector('#fornecedor');
const selectTamanhoLetras = document.querySelector('#tamanhoLetras');
const selectTamanhoNumeros = document.querySelector('#tamanhoNumeros');
const selectUnidadeMassa = document.querySelector('#unidadeDeMassa');
const selectMedidaVolume = document.querySelector('#medidaVolume');
const selectUnidadeComprimento = document.querySelector('#unidadeComprimento');
const selectUnidadeEstoque = document.querySelector('#unidadeEstoque');
const selectCorProduto = document.querySelector('#corProduto');

// Select all the input fields
const inputCodigoEAN = document.querySelector('#codigoDeBarras');
const inputNomeProduto = document.querySelector('#nomeProduto');
const inputObservacoes = document.querySelector('#observacoes');
const inputMassa = document.querySelector('#massaNumero');
const inputVolume = document.querySelector('#volumeNumero');
const inputComprimento = document.querySelector('#comprimento');
const inputQuantidadeEstoque = document.querySelector('#estoqueQtd');
const inputPrecoCompra = document.querySelector('#precoCusto');
const inputMarkup = document.querySelector('#markup');
const inputPrecoVenda = document.querySelector('#precoVenda');

const inputPathImg = document.querySelector('#produto-imagem');
const divImgProduct = document.querySelector('.quadro-img');


inputPathImg.onchange = function (event) {
    const file = event.target.files[0];
    if (file) {
        const rendererImgProduct = document.createElement('img');
        rendererImgProduct.style.maxWidth = '100%';

        const reader = new FileReader();

        reader.onload = function (e) {
            rendererImgProduct.src = e.target.result;
            divImgProduct.innerHTML = '';
            divImgProduct.appendChild(rendererImgProduct);
        };

        reader.readAsDataURL(file);

        // Define o caminho relativo sem a extensão
        const relativePath = file.name.replace(/\.[^/.]+$/, "");
        inputPathImg.setAttribute('data-relative-path', relativePath);
    }
};

document.querySelector('#btn-cadastrar').addEventListener('click', function (e) {
    e.preventDefault();
    const file = document.querySelector('input[type="file"]').files[0];
    let relativePath = null;

    if (file) {
        const extension = file.name.split('.').pop();
        relativePath = `${inputPathImg.getAttribute('data-relative-path')}-${inputCodigoEAN.value}.${extension}`;
    };

    if (!inputCodigoEAN.value || !inputNomeProduto.value) {
        alert("Por favor, preencha os campos Código EAN e Nome do Produto.");
        return;
    }
    
    // Get the values from the input fields and populate the object
    const produtoData = {
        "codigo_ean": inputCodigoEAN.value,
        "nome_produto": inputNomeProduto.value,
        "grupo_id": selectGrupo.value,
        "sub_grupo_id": selectSubGrupo.value,
        "tamanho_letras_id": selectTamanhoLetras.value,
        "tamanho_num_id": selectTamanhoNumeros.value,
        "unidade_massa_qtd": inputMassa.value,
        "unidade_massa_id": selectUnidadeMassa.value,
        "medida_volume_qtd": inputVolume.value,
        "medida_volume_id": selectMedidaVolume.value,
        "unidade_comprimento_qtd": inputComprimento.value,
        "unidade_comprimento_id": selectUnidadeComprimento.value,
        "cor_produto_id": selectCorProduto.value,
        "observacoes": inputObservacoes.value,
        "quantidade_estoque": inputQuantidadeEstoque.value,
        "preco_compra": inputPrecoCompra.value,
        "markup": inputMarkup.value,
        "preco_venda": inputPrecoVenda.value,
        "unidade_estoque_id": selectUnidadeEstoque.value,
        "fornecedor_id": selectFornecedor.value,
        "caminho_img_produto": relativePath
    };

    postNewProduto(produtoData);

    if (relativePath) {
        uploadImage(relativePath); // Passa o caminho único para salvar a imagem
    };

    clearForm();
});

function clearForm() {
    // Limpar inputs de texto
    inputCodigoEAN.value = '';
    inputNomeProduto.value = '';
    inputObservacoes.value = '';
    inputMassa.value = '';
    inputVolume.value = '';
    inputComprimento.value = '';
    inputQuantidadeEstoque.value = '';
    inputPrecoCompra.value = '';
    inputMarkup.value = '';
    inputPrecoVenda.value = '';

    // Limpar selects
    selectGrupo.selectedIndex = 0;
    selectSubGrupo.selectedIndex = 0;
    selectTamanhoLetras.selectedIndex = 0;
    selectTamanhoNumeros.selectedIndex = 0;
    selectUnidadeMassa.selectedIndex = 0;
    selectMedidaVolume.selectedIndex = 0;
    selectUnidadeComprimento.selectedIndex = 0;
    selectUnidadeEstoque.selectedIndex = 0;
    selectCorProduto.selectedIndex = 0;
    selectFornecedor.selectedIndex = 0;

    // Limpar a imagem exibida
    divImgProduct.innerHTML = '';
    
    // Limpar o input de imagem
    inputPathImg.value = '';
    inputPathImg.removeAttribute('data-relative-path');
}

getGrupo(selectGrupo);
getSubGrupo(selectSubGrupo);
getFornecedor(selectFornecedor);
getTamanhoLetras(selectTamanhoLetras);
getTamanhoNumeros(selectTamanhoNumeros);
getunidadeDeMassa(selectUnidadeMassa);
getMedidaVolume(selectMedidaVolume);
getunidadeComprimento(selectUnidadeComprimento);
getunidadeEstoque(selectUnidadeEstoque);
getCorProduto(selectCorProduto);


