const ul = document.querySelector('.teste')
const apiEndpoints = require('../config/apiEndpoints')

const apiGetProduto = apiEndpoints.getProduto;

fetch(apiGetProduto)
    .then(response => response.json())
    .then(data => {
        data.map(produto => { 
            const li = document.createElement('li')
            li.innerText = produto.nome;
            ul.appendChild(li)
       })
    })
    .catch(error => {
        console.error('Erro ao buscar dados:', error);
    });
