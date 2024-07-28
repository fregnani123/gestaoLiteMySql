const menuPainel1 = [
    { id: '1', texto: 'Painel de controle', to: '../public/menu.html' },
    { id: '2', texto: 'Realizar venda', to: './screenSales.html' },
    { id: '3', texto: 'Detalhes de venda', to: '../public/detalhes-venda.html' },
    { id: '4', texto: 'Produto', to: '../public/register_product.html' },
    { id: '7', texto: 'Cadastro de cliente', to: '../public/cadastro-cliente.html' },
    { id: '8', texto: 'Controle de entrada ', to: '../public/controle-entrada.html' },
   
];

const ulMenu = document.getElementById('ul-Menu');
console.log(ulMenu);

function criaLi(texto, id, to) {
    const a = document.createElement('a');
    const li = document.createElement('li');
    a.textContent = texto;
    a.href = to;

    if (to.startsWith('http')) {
        a.target = '_blank';
    }

    a.classList.add('list-a' + id);
    li.classList.add('menu-item-' + id);
    li.appendChild(a);

    return li;
}

// Cria a lista de itens de menu a partir dos arrays
function criaMenu(menuArray) {
    menuArray.forEach(item => {
        const li = criaLi(item.texto, item.id, item.to);
        ulMenu.appendChild(li);
    });
}

// Adiciona os itens do menuPainel1 e menuPainel2
criaMenu(menuPainel1);

