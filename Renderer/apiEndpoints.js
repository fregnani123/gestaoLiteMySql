// My Methods.


const apiEndpoints = {
    getCategoriasProduto: 'http://localhost:3000/categorias',
    getGruposProduto: 'http://localhost:3000/grupos',
    getFornecedor: 'http://localhost:3000/fornecedor',
};

function getCategoriasProduto(renderer) {
    const getCategoriasProduto = apiEndpoints.getCategoriasProduto;
    fetch(getCategoriasProduto)
        .then(response => response.json())
        .then(data => {
            const categorias = data;
            categorias.forEach((categoria) => {
                const option = document.createElement('option');
                option.innerHTML = categoria.nome_categoria;
                option.value = categoria.categoria_id;
                renderer.appendChild(option);
            });
            console.log(data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
}

function getGruposProduto(renderer) {
    const getGruposProduto = apiEndpoints.getGruposProduto;

    fetch(getGruposProduto)
        .then(response => response.json()) 
        .then(data => {
            const grupoProduto = data;
            grupoProduto.forEach((grupo) => {
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

function getFornecedor(renderer){
    const getFornecedor = apiEndpoints.getFornecedor;

    fetch(getFornecedor)
        .then(response => response.json()) 
        .then(data => {
            const fornecedor = data;
            fornecedor.forEach((fornecedor) => {
                const option = document.createElement('option');
                option.innerHTML = fornecedor.nome_fornecedor;
                option.value =fornecedor.fornecedor_id;
                renderer.appendChild(option);
            });
            console.log(data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
}


