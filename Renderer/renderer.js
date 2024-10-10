// Seleciona os elementos do dropdown
const selectGrupo = document.querySelector('#grupo');
const selectSubGrupo = document.querySelector('#sub-grupo');
const selectFornecedor = document.querySelector('#fornecedor');
const selectTamanhoLetras = document.querySelector('#tamanhoLetras');
const selectTamanhoNumeros = document.querySelector('#tamanhoNumeros');
const selectUnidadeMassa = document.querySelector('#unidadeDeMassa');
const selectMedidaVolume = document.querySelector('#medidaVolume');
const selectUnidadeComprimento = document.querySelector('#unidadeComprimento');
const selectUnidadeEstoque = document.querySelector('#unidadeEstoque');
const selectCorProduto = document.querySelector('#corProduto');

// Seleciona todos os campos de input
const inputCodigoEAN = document.querySelector('#codigoDeBarras');
const inputNomeProduto = document.querySelector('#nomeProduto');
const inputObservacoes = document.querySelector('#observacoes');
const inputMassa = document.querySelector('#massaNumero');
const inputVolume = document.querySelector('#volumeNumero');
const inputComprimento = document.querySelector('#comprimento');
const inputQuantidadeEstoque = document.querySelector('#estoqueQtd');
const inputPrecoCompra = document.querySelector('#precoCusto');
const inputMarkup = document.querySelector('#inputMarkup');
const outputLucro = document.querySelector('#lucro');
const inputPrecoVenda = document.querySelector('#precoVenda');

const inputPathImg = document.querySelector('#produto-imagem');
const divImgProduct = document.querySelector('.quadro-img');

//Metodos criado por mim que renderizam os values iniciais padrões ou cadastrados no DB.

getGrupo(selectGrupo);
getSubGrupo(selectSubGrupo);
getFornecedor(selectFornecedor);
getTamanhoLetras(selectTamanhoLetras);
getTamanhoNumeros(selectTamanhoNumeros);
getunidadeComprimento(selectUnidadeComprimento);
getunidadeEstoque(selectUnidadeEstoque);
getMedidaVolume(selectMedidaVolume);
getCorProduto(selectCorProduto);
getunidadeDeMassa(selectUnidadeMassa);


// Formatação do campo de preço de compra
inputPrecoCompra.addEventListener('input', (e) => {
    let value = e.target.value;
    // Remove qualquer caractere que não seja número
    value = value.replace(/\D/g, '');
    // Converte para um número com duas casas decimais
    value = (parseFloat(value) / 100).toFixed(2);
    // Atualiza o valor do campo, substitui o ponto por vírgula
    e.target.value = value.replace('.', ',');
    calcularLucro();
    calcularLucroPorVenda();
});

// Formatação do campo de preço de venda
inputPrecoVenda.addEventListener('input', (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    value = (parseFloat(value) / 100).toFixed(2);
    e.target.value = value.replace('.', ',');
    calcularLucroPorVenda();
    calcularLucro();
});


// Permite apenas números e um ponto decimal no campo de markup
inputMarkup.addEventListener('input', (e) => {
    // Se o input estiver vazio, redefine a saída e retorna
    if (e.target.value === '') {
        inputPrecoVenda.value = '0,00';
        outputLucro.value = '0,00';
        // Resetando o valor da saída para '0,00' quando o input é limpo
        return;
    }

    // Substitui caracteres não numéricos e garante que apenas um ponto decimal é permitido
    e.target.value = e.target.value
        .replace(/[^0-9,.]/g, '') // Permitir dígitos, vírgulas e pontos
        .replace(/(\..*)\./g, '$1') // Garantir que apenas um ponto decimal é permitido
        .replace(/,/g, '.'); // Converter vírgula em ponto para a conversão correta para float

    // Chama funções para calcular lucro e lucro por venda
    calcularLucro();
    calcularLucroPorVenda();
});

// Função para calcular o lucro com base no preço de venda
function calcularLucroPorVenda() {
    let precoCompra = parseFloat(inputPrecoCompra.value.replace(',', '.'));
    let precoVenda = parseFloat(inputPrecoVenda.value.replace(',', '.'));

    if (!isNaN(precoVenda) && !isNaN(precoCompra)) {
        let lucro = precoVenda - precoCompra;
        let markupPercentual = (lucro / precoCompra) * 100;
        inputMarkup.value = isNaN(markupPercentual) || markupPercentual < 0 ? '' : markupPercentual;
    }
    if (inputMarkup.value === '') {
        outputLucro.value = '0,00';
    }
}

// Função para calcular o lucro com base no markup
function calcularLucro() {
    let precoCompra = parseFloat(inputPrecoCompra.value.replace(',', '.'));
    let margemLucro = parseFloat(inputMarkup.value);

    if (!isNaN(precoCompra) && !isNaN(margemLucro)) {
        let valorLucro = precoCompra * (margemLucro / 100);
        let valorVenda = precoCompra + valorLucro;

        inputPrecoVenda.value = valorVenda.toFixed(2).replace('.', ',');
        outputLucro.value = valorLucro.toFixed(2).replace('.', ',');
    }
}

// Eventos para exibir o formulário de cadastro de grupo, subgrupo e fornecedor

async function postNewGrupoProduto(newGrupoData) {
    const postNewGrupoProdutoData = apiEndpoints.postNewGrupoProduto;
    fetch(postNewGrupoProdutoData, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGrupoData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();

        })
        .then(data => {
            console.log('Grupo added successfully:', data);
            // // Chama a função para carregar novamente os grupos a partir da API
            getGrupo(selectGrupo);
        })
        .catch(error => {
            console.error('Error adding Grupo:', error);
        });

}

document.addEventListener('DOMContentLoaded', () => {
    const containerRegister = document.querySelector('.container-register');

    const btnCadGrupo = document.querySelector('#add-grupo');
    const btnCadSubGrupo = document.querySelector('#add-subGrupo');
    const btnCadFornecedor = document.querySelector('#add-fornecedor');

    btnCadGrupo.addEventListener('click', (e) => {
        e.preventDefault();
        containerRegister.style.display = 'flex';
        renderizarInputsGrupo();
    });

    btnCadSubGrupo.addEventListener('click', (e) => {
        e.preventDefault();
        containerRegister.style.display = 'flex';
        renderizarInputsSubGrupo();
    });

    btnCadFornecedor.addEventListener('click', (e) => {
        e.preventDefault();
        containerRegister.style.display = 'flex';
        renderizarInputsFornecedor();
    });

    // Função para criar o formulário de cadastro de grupo
    function renderizarInputsGrupo() {
        containerRegister.innerHTML = '';

        const divGrupo = document.createElement('div');
        divGrupo.className = 'div-grupo';

        const exitButton = document.createElement('button');
        exitButton.id = 'btn-exit';
        exitButton.className = 'btn-exit';
        exitButton.textContent = 'X';
        divGrupo.appendChild(exitButton);

        const labelText = document.createElement('span');
        labelText.textContent = 'Cadastrar Grupo';
        divGrupo.appendChild(labelText);

        const inputGrupo = document.createElement('input');
        inputGrupo.className = 'newGrupo';
        inputGrupo.type = 'text';
        inputGrupo.placeholder = 'Nome do Grupo';
        divGrupo.appendChild(inputGrupo);

        const cadButton = document.createElement('button');
        cadButton.id = 'btn-cad-grupo';
        cadButton.textContent = 'Cadastrar';
        divGrupo.appendChild(cadButton);

        containerRegister.appendChild(divGrupo);

        let inputNewGrupo = document.querySelector('.newGrupo');

        cadButton.addEventListener('click', (e) => {
            e.preventDefault();

            const newGrupo = {
                nome_grupo: inputNewGrupo.value.trim()
            };

            if (!inputNewGrupo.value.trim()) {
                alert('O campo de grupo não pode estar vazio!');
                return;
            }

            postNewGrupoProduto(newGrupo);
            inputNewGrupo.value = ''; // Limpa o campo após o envio
            // Limpa as opções atuais do select e redefine a primeira como "Selecione"
            selectGrupo.innerHTML = '<option value="">Selecione</option>';

        });

        exitButton.addEventListener('click', (e) => {
            e.preventDefault();
            containerRegister.style.display = 'none';

        });
    }

    // Função para criar o formulário de cadastro de subgrupo

    async function postNewSubGrupoProduto(newSubGrupoData) {
        const postNewSubGrupoProdutoData = apiEndpoints.postNewSubGrupoProduto;
        fetch(postNewSubGrupoProdutoData, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newSubGrupoData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('sub-grupo added successfully:', data);
                // // Chama a função para carregar novamente os grupos a partir da API
                getSubGrupo(selectSubGrupo);
            })
            .catch(error => {
                console.error('Error adding Sub-Grupo:', error);
            });

    }

    function renderizarInputsSubGrupo() {
        containerRegister.innerHTML = '';

        const divSubGrupo = document.createElement('div');
        divSubGrupo.className = 'div-subGrupo';

        const exitButton = document.createElement('button');
        exitButton.id = 'btn-exit';
        exitButton.className = 'btn-exit';
        exitButton.textContent = 'X';
        divSubGrupo.appendChild(exitButton);

        const labelText = document.createElement('span');
        labelText.textContent = 'Cadastrar Sub-Grupo';
        divSubGrupo.appendChild(labelText);

        const inputSubGrupo = document.createElement('input');
        inputSubGrupo.className = 'newSubGrupo';
        inputSubGrupo.type = 'text';
        inputSubGrupo.placeholder = 'Nome do Sub-Grupo';
        divSubGrupo.appendChild(inputSubGrupo);

        const cadButton = document.createElement('button');
        cadButton.id = 'btn-cad-subGrupo';
        cadButton.textContent = 'Cadastrar';
        divSubGrupo.appendChild(cadButton);

        containerRegister.appendChild(divSubGrupo);

        let inputNewSubGrupo = document.querySelector('.newSubGrupo');

        cadButton.addEventListener('click', (e) => {
            e.preventDefault();

            const newSubGrupo = {
                nome_sub_grupo: inputNewSubGrupo.value.trim()
            };

            if (!inputNewSubGrupo.value.trim()) {
                alert('O campo de sub-grupo não pode estar vazio!');
                return;
            }

            postNewSubGrupoProduto(newSubGrupo);
            inputNewSubGrupo.value = ''; // Limpa o campo após o envio
            // Limpa as opções atuais do select e redefine a primeira como "Selecione"
            selectSubGrupo.innerHTML = '<option value="">Selecione</option>';

        });

        exitButton.addEventListener('click', (e) => {
            e.preventDefault();
            containerRegister.style.display = 'none';
        });
    }

    //Renderiza form cadastro Fornecedor
    function renderizarInputsFornecedor() {
        containerRegister.innerHTML = '';
    
        const divFornecedor = document.createElement('div');
        divFornecedor.className = 'div-fornecedor';
    
        const exitButton = document.createElement('button');
        exitButton.id = 'btn-exit';
        exitButton.className = 'btn-exit';
        exitButton.textContent = 'X';
        divFornecedor.appendChild(exitButton);
    
        // Título do formulário
        const labelText = document.createElement('div');
        labelText.classList='labelText';
        labelText.textContent = 'Cadastrar Fornecedor';
        divFornecedor.appendChild(labelText);
    
        // Função para criar uma linha de inputs
        function criarLinhaInputs(labelText1, inputId1, placeholder1, labelText2, inputId2, placeholder2) {
            const linhaDiv = document.createElement('div');
            linhaDiv.className = 'linha-inputs'; // classe para estilização
    
            // Primeiro par (label + input)
            const div1 = document.createElement('div');
            const label1 = document.createElement('label');
            div1.className= 'div1'
            label1.textContent = labelText1;
            label1.setAttribute('for', inputId1);
            div1.appendChild(label1);
    
            const input1 = document.createElement('input');
            input1.id = inputId1;
            input1.type = 'text';
            input1.placeholder = placeholder1;
            div1.appendChild(input1);
    
            linhaDiv.appendChild(div1);
    
            // Segundo par (label + input)
            const div2 = document.createElement('div');
            const label2 = document.createElement('label');
            div2.className = 'div2'
            label2.textContent = labelText2;
            label2.setAttribute('for', inputId2);
            div2.appendChild(label2);
    
            const input2 = document.createElement('input');
            input2.id = inputId2;
            input2.type = 'text';
            input2.placeholder = placeholder2;
            div2.appendChild(input2);
    
            linhaDiv.appendChild(div2);
    
            divFornecedor.appendChild(linhaDiv);
        }
    
        // Campos agrupados
        criarLinhaInputs('CNPJ', 'cnpj', 'CNPJ', 'Razão Social', 'razaoSocial', 'Razão Social');
        criarLinhaInputs( 'Nome Fantasia', 'Nome Fantasia', 'Nome Fantasia','Endereço', 'endereco', 'Endereço');
        criarLinhaInputs('Número', 'numero', 'Número', 'CEP', 'cep', 'CEP');
        criarLinhaInputs('Telefone', 'telefone', 'Telefone', 'Email', 'email', 'Email');
    
        // Botão de cadastro
        const cadButton = document.createElement('button');
        cadButton.id = 'btn-cad-fornecedor';
        cadButton.textContent = 'Cadastrar';
        divFornecedor.appendChild(cadButton);
    
        // Adiciona o formulário ao container principal
        containerRegister.appendChild(divFornecedor);
    
        // Função para fechar o formulário
        exitButton.addEventListener('click', (e) => {
            e.preventDefault();
            containerRegister.style.display = 'none';
        });
    }    

});

// Função para exibir a imagem do produto
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

        const relativePath = file.name.replace(/\.[^/.]+$/, "");
        inputPathImg.setAttribute('data-relative-path', relativePath);
    }
};

// Evento para cadastrar um novo produto
document.querySelector('#btn-cadastrar').addEventListener('click', function (e) {
    e.preventDefault();
    const file = document.querySelector('input[type="file"]').files[0];
    let relativePath = null;

    if (file) {
        const extension = file.name.split('.').pop();
        relativePath = `${inputPathImg.getAttribute('data-relative-path')}-${inputCodigoEAN.value}.${extension}`;
        uploadImage(relativePath);
    }

    const produtoData = {
        codigo_ean: inputCodigoEAN.value,
        nome_produto: inputNomeProduto.value,
        observacoes: inputObservacoes.value,
        categoria_id: selectGrupo.value,
        grupo_produto_id: selectSubGrupo.value,
        fornecedor_id: selectFornecedor.value,
        tamanho_letras_id: selectTamanhoLetras.value,
        tamanho_num_id: selectTamanhoNumeros.value,
        unidade_massa_id: selectUnidadeMassa.value,
        unidade_comprimento_id: selectUnidadeComprimento.value,
        medida_volume_id: selectMedidaVolume.value,
        quantidade_estoque: inputQuantidadeEstoque.value,
        preco_compra: inputPrecoCompra.value,
        markup: inputMarkup.value,
        preco_venda: inputPrecoVenda.value,
        unidade_estoque_id: selectUnidadeEstoque.value,
        cor_produto: selectCorProduto.value,
        caminho_imagem: relativePath,
    };

    postNewProduto(produtoData);

    // Limpar todos os campos
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

    // Resetar as seleções dos dropdowns
    selectGrupo.selectedIndex = 0;
    selectSubGrupo.selectedIndex = 0;
    selectFornecedor.selectedIndex = 0;
    selectTamanhoLetras.selectedIndex = 0;
    selectTamanhoNumeros.selectedIndex = 0;
    selectUnidadeMassa.selectedIndex = 0;
    selectMedidaVolume.selectedIndex = 0;
    selectUnidadeComprimento.selectedIndex = 0;
    selectUnidadeEstoque.selectedIndex = 0;
    selectCorProduto.selectedIndex = 0;

    // Limpar pré-visualização da imagem
    divImgProduct.innerHTML = ` <img class="img-produto" src="../style/img/produto.png" alt="imagem produto">`;
    inputPathImg.value = '';

});


// Função para enviar a imagem
function uploadImage(filePath) {
    const fileInput = document.querySelector('input[type="file"]');
    const formData = new FormData();
    formData.append('image', fileInput.files[0], filePath);

    fetch('/api/upload', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log('Imagem enviada com sucesso:', data);
        })
        .catch(error => {
            console.error('Erro ao enviar a imagem:', error);
        });
} 