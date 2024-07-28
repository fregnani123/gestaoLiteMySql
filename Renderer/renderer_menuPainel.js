const menuPainel1 = [
    { id: '1', texto: 'Painel de controle', src: '../style/img/painel-de-controle (1).png', to: '' },
    { id: '2', texto: 'Realizar venda', src: '../style/img/carrinho-de-compras.png', to: './screenSales.html' },
    { id: '3', texto: 'Detalhes de venda', src: '../style/img/detalhes vendas.png', to: '../public/detalhes-venda.html' },
    { id: '4', texto: 'Cadastro de produto', src: '../style/img/cadastro de produtos.png', to: '../public/register_product.html' },
    { id: '5', texto: 'Alterar Produto', src: '../style/img/alterar.png', to: '../public/alterar-produto.html' },
];
const menuPainel2 = [
    { id: '6', texto: 'Excluir Produto', src: '../style/img/excluir-produto.png', to: '../public/excluir-produtos.html' },
    { id: '7', texto: 'Cadastro de cliente', src: '../style/img/cadastroCliente.png', to: '../public/cadastro-cliente.html' },
    { id: '8', texto: 'Controle de entrada ', src: '../style/img/caixa-de-entrada.png', to: '../public/controle-entrada.html' },
    { id: '9', texto: 'Suporte', src: '../style/img/suporte.png', to: 'https://api.whatsapp.com/send?phone=5548996607600' },
    { id: '10', texto: 'Exit', src: '../style/img/sair.png', to: '../public/index.html' },
];

function criaLi(texto, id, src, to) {
    const li = document.createElement('li');

    if (id === '1') {
        const span = document.createElement('span');
        span.textContent = texto;
        li.appendChild(span);
    } else {
        const a = document.createElement('a');
        a.textContent = texto;
        a.href = to;

        if (to.startsWith('http')) {
            a.target = '_blank';
        }

        li.appendChild(a);
    }

    if (src && typeof src === 'string' && src.trim() !== '') {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('img-'+ id)
        li.appendChild(img);
    }

    li.classList.add('menu-item-' + id);
    return li;
}

const listPainel1 = document.querySelector('#menu-painel1');
const listPainel2 = document.querySelector('#menu-painel2');

menuPainel1.map(itemPainel => {
    const li = criaLi(itemPainel.texto, itemPainel.id, itemPainel.src, itemPainel.to);
    listPainel1.appendChild(li);
});

menuPainel2.map(itemPainel => {
    const li = criaLi(itemPainel.texto, itemPainel.id, itemPainel.src, itemPainel.to);
    listPainel2.appendChild(li);
});
