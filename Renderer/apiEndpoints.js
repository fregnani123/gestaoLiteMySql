// My Methods.

const apiEndpoints = {
    getGrupo: 'http://localhost:3000/grupos',
    getSubGrupo: 'http://localhost:3000/subGrupos',
    getFornecedor: 'http://localhost:3000/fornecedor',
    getTamanhoLetras: 'http://localhost:3000/tamanhoLetras',
    getTamanhoNumeros: 'http://localhost:3000/tamanhoNumeros',
    getunidadeDeMassa: 'http://localhost:3000/unidadeMassa',
    getMedidaVolume: 'http://localhost:3000/medidaVolume',
    getunidadeComprimento: 'http://localhost:3000/unidadeComprimento',
    getunidadeEstoque: 'http://localhost:3000/unidadeEstoque',
    getCorProduto: 'http://localhost:3000/corProduto',
    postNewProduto: 'http://localhost:3000/postNewProduto',
    postImgProduto: 'http://localhost:3000/uploadImagem'
};


async function uploadImage(fileName) {
    const fileInput = document.querySelector('input[type="file"]');
    const formData = new FormData();
    const file = fileInput.files[0];
    const extension = file.name.split('.').pop();
    formData.append('image', file, `${fileName}`);

    try {
        const response = await fetch(apiEndpoints.postImgProduto, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Upload bem-sucedido:', data);

        } else {
            console.error('Falha no upload');
        }
    } catch (error) {
        console.error('Erro ao fazer upload do arquivo:', error);
    }
}

function postNewProduto(produtoData) {
    const postNewProdutoData = apiEndpoints.postNewProduto;
    
    if (!produtoData.codigo_ean || !produtoData.nome_produto) {
        console.error('Erro: código EAN e nome do produto são obrigatórios.');
        return;
    }
    fetch(postNewProdutoData, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(produtoData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Produto added successfully:', data);
        })
        .catch(error => {
            console.error('Error adding produto:', error);
        });
}


function getGrupo(renderer) {
    const getGrupo = apiEndpoints.getGrupo;
    fetch(getGrupo)
        .then(response => response.json())
        .then(data => {
            const grupo = data;
            grupo.forEach((grupo) => {
                const option = document.createElement('option');
                option.innerHTML = grupo.nome_grupo;
                option.value = grupo.grupo_id;
                renderer.appendChild(option);
            });
            console.log(data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
}

function getSubGrupo(renderer) {
    const getSubGrupo = apiEndpoints.getSubGrupo;

    fetch(getSubGrupo)
        .then(response => response.json()) 
        .then(data => {
            const subGrupo = data;
            subGrupo.forEach((subGrupo) => {
                const option = document.createElement('option');
                option.innerHTML = subGrupo.nome_sub_grupo;
                option.value = subGrupo.sub_grupo_id;
                renderer.appendChild(option);
            });
            console.log(data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
}

function getFornecedor(renderer){
    const getFornecedor = apiEndpoints.getFornecedor;

    fetch(getFornecedor)
        .then(response => response.json()) 
        .then(data => {
            const fornecedor = data;
            fornecedor.forEach((fornecedor) => {
                const option = document.createElement('option');
                option.innerHTML = fornecedor.fornecedor_nome;
                option.value =fornecedor.fornecedor_id;
                renderer.appendChild(option);
            });
            console.log(data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
}

function getTamanhoLetras(renderer) {
    const getTamanho = apiEndpoints.getTamanhoLetras;  

    fetch(getTamanho)
        .then(response => response.json())
        .then(data => {
            data.forEach((tamanho) => {
                const option = document.createElement('option');
                option.innerHTML = tamanho.tamanho; 
                option.value = tamanho.tamanho_id;  
                renderer.appendChild(option);
            });
            console.log(data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
}

function getunidadeDeMassa(renderer) {
    const getunidadeDeMassa = apiEndpoints.getunidadeDeMassa;  

    fetch(getunidadeDeMassa)
        .then(response => response.json())
        .then(data => {
            data.forEach((unMassa) => {
                const option = document.createElement('option');
                option.innerHTML = unMassa.unidade_nome; 
                option.value = unMassa.unidade_massa_id;  
                renderer.appendChild(option);
            });
            console.log(data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
}

function getTamanhoNumeros(renderer) {
    const getTamanho = apiEndpoints.getTamanhoNumeros;  

    fetch(getTamanho)
        .then(response => response.json())
        .then(data => {
            data.forEach((tamanho) => {
                const option = document.createElement('option');
                option.innerHTML = tamanho.tamanho; 
                option.value = tamanho.tamanho_id;  
                renderer.appendChild(option);
            });
            console.log(data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
}
function getunidadeComprimento(renderer) {
    const getComprimento = apiEndpoints.getunidadeComprimento;  

    fetch(getComprimento)
        .then(response => response.json())
        .then(data => {
            data.forEach((comprimento) => {
                const option = document.createElement('option');
                option.innerHTML = comprimento.unidade_nome; 
                option.value = comprimento.unidade_comprimento_id;  
                renderer.appendChild(option);
            });
            console.log(data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
}

function getunidadeEstoque(renderer) {
    const getEstoque = apiEndpoints.getunidadeEstoque;  

    fetch(getEstoque)
        .then(response => response.json())
        .then(data => {
            data.forEach((unidadeEstoque) => {
                const option = document.createElement('option');
                option.innerHTML = unidadeEstoque.estoque_nome; 
                option.value = unidadeEstoque.unidade_estoque_id;  
                renderer.appendChild(option);
            });
            console.log(data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
}

function getMedidaVolume(renderer) {
    const getVolume = apiEndpoints.getMedidaVolume;  

    fetch(getVolume)
        .then(response => response.json())
        .then(data => {
            data.forEach((medida) => {
                const option = document.createElement('option');
                option.innerHTML = medida.medida_nome; 
                option.value = medida.medida_volume_id;  
                renderer.appendChild(option);
            });
            console.log(data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
}

function getCorProduto(renderer) {
    const getVolume = apiEndpoints.getCorProduto;  

    fetch(getVolume)
        .then(response => response.json())
        .then(data => {
            data.forEach((cor) => {
                const option = document.createElement('option');
                option.innerHTML = cor.nome_cor_produto; 
                option.value = cor.cor_produto_id;  
                renderer.appendChild(option);
            });
            console.log(data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
}



