// Seleciona os elementos do carrinho
const carrinho = document.querySelector('.carrinho');
const botaoAbrir = document.querySelector('.cart-button');
const botaoFechar = document.querySelector('.fecharCarrinho');
const containerProdutos = document.querySelector('.containerProdutos');
const mensagemVazia = document.querySelector('#mensagemVazia');
const carrinhoIcon = document.querySelector('.carrinhoIcon');


carrinhoIcon.addEventListener("click", (e) =>{
    e.preventDefault();
    abrirCarrinho();
    
})

// Função para abrir o carrinho
function abrirCarrinho() {
    carrinho.classList.add('ativo');
}

// Função para fechar o carrinho
function fecharCarrinho() {
    carrinho.classList.remove('ativo');
}


function adicionarAoCarrinho(produto) {
    let carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Verifica se o produto já está no carrinho
    const produtoExistente = carrinhoItens.find(item => item.id === produto.id);
    if (produtoExistente) {
        produtoExistente.quantidade += 1; // Incrementa a quantidade se o produto já existe
    } else {
        carrinhoItens.push({ ...produto, quantidade: 1 }); // Adiciona o produto ao carrinho
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinhoItens)); // Atualiza o localStorage
    renderizarCarrinho(); // Renderiza o carrinho novamente
}


function removerDoCarrinho(produtoId) {
    let carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinhoItens = carrinhoItens.filter(item => item.id !== produtoId); // Remove o produto do array
    localStorage.setItem('carrinho', JSON.stringify(carrinhoItens)); // Atualiza o localStorage
    renderizarCarrinho(); // Renderiza o carrinho novamente
}


function renderizarCarrinho() {
    const carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || []; // Recupera os itens do carrinho
    containerProdutos.innerHTML = ''; 

    if (carrinhoItens.length === 0) {
        mensagemVazia.style.display = 'block';
    } else {
        // Se houver produtos, exibe cada um deles
        mensagemVazia.style.display = 'none';

        carrinhoItens.forEach(item => {
            const produtoHTML = `
                <div class="produtoCarrinho">
                    <img src="${item.imagem}" alt="${item.descricao}">
                    <div class="produtoInfo">
                        <p>${item.descricao}</p>
                        <p>${item.preco}</p>
                        <p>Quantidade: ${item.quantidade}</p>
                        <button class="ButtonRemuve" onclick="removerDoCarrinho('${item.id}')">Remover</button>
                       <a href="/RealizarCompra/compra.html"><button  class= "continuarCompraButton" >Continuar</button></a>
                       
                    </div>
                </div>
            `;
            containerProdutos.innerHTML += produtoHTML; // Adiciona o produto ao carrinho
        });
    }
}

// Adiciona evento de clique aos botões de "Carrinho"
document.querySelectorAll('.cart-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const produtoContainer = e.target.closest('.container-img'); // Encontra o container do produto
        const produto = {
            id: produtoContainer.dataset.produtoId, // ID do produto
            imagem: produtoContainer.querySelector('.img').src, // URL da imagem
            descricao: produtoContainer.querySelector('.descricao').textContent, // Descrição do produto
            preco: produtoContainer.querySelector('.preco').textContent, // Preço do produto
        };
        adicionarAoCarrinho(produto); // Adiciona o produto ao carrinho
        abrirCarrinho(); // Abre o carrinho
    });
});

// Adiciona eventos de abrir e fechar o carrinho
botaoAbrir.addEventListener('click', abrirCarrinho);
botaoFechar.addEventListener('click', fecharCarrinho);

// Renderiza o carrinho ao carregar a página
renderizarCarrinho();

//localStorage.clear();