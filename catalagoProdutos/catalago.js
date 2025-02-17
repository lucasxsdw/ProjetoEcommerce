const carrinho = document.querySelector(".carrinho")
//const abrir = document.querySelectorAll("#botaoAbrir")
const fechar = document.querySelector(".fecharCarrinho")
const listarContainer = document.querySelector(".produtoInfo");


abrir.addEventListener("click", (e) => {
    e.preventDefault();
    carrinho.classList.toggle("ativarCarrinho");
});


fechar.addEventListener("click", () => {
    carrinho.classList.remove("ativarCarrinho"); 
});



document.querySelectorAll(".cart-button").forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
      
        // Subir na hierarquia até o container do produto
        const produtoContainer = e.target.closest(".container-img");

        // Selecionar apenas os <p> dentro desse produto
        const descProduto = produtoContainer.querySelectorAll(".descricao-camisa p");
        const dados = Array.from(descProduto).map(p => p.textContent);

        localStorage.setItem("dados", JSON.stringify(dados));

        listaProdutos();
        
        

    });
});

listaProdutos();

function listaProdutos(){

    const produto = JSON.parse(localStorage.getItem("dados")); 

    const produtoNome = document.querySelector(".produtoDescricao");

    const produtoPreco = document.querySelector(".produtoValor")
    const mensagem = document.querySelector("#mensagemVazia")

         if (produto) {
            produtoNome.textContent = produto;
            mensagem.style.display = 'none';

         }else{
            
            mensagem.style.display = 'block';
         }
}

//localStorage.clear();
 