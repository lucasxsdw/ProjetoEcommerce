const carrinho = document.querySelector(".carrinho")
//const abrir = document.querySelectorAll("#botaoAbrir")
const fechar = document.querySelector(".fecharCarrinho")
const listarContainer = document.querySelector(".produtoInfo");

/*
abrir.addEventListener("click", (e) => {
    e.preventDefault();
    carrinho.classList.toggle("ativarCarrinho");
});


fechar.addEventListener("click", () => {
    carrinho.classList.remove("ativarCarrinho"); 
});

*/

document.querySelectorAll(".cart-button").forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
       console.log("clicou")
        
       
       const produtoContainer = e.target.closest(".container-img");

        const descProduto = produtoContainer.querySelector(".descricao");
        const precoProduto = produtoContainer.querySelector(".preco");
        console.log(descProduto, precoProduto);


        localStorage.setItem("descProduto", descProduto.textContent);
        localStorage.setItem("precoProduto", precoProduto.textContent);

        listaProdutos();
        
        

    });
});

listaProdutos();

function listaProdutos(){

    const descricao = localStorage.getItem("descProduto"); 
    const preco = localStorage.getItem("precoProduto"); 

    const produtoNome = document.querySelector(".produtoDescricao"); 
    const produtoPreco = document.querySelector(".produtoValor");


    const mensagem = document.querySelector("#mensagemVazia")

         if (descricao && preco) {
            produtoNome.textContent = descricao;
            produtoPreco.textContent = preco;
            mensagem.style.display = 'none';

         }else{
            
            mensagem.style.display = 'block';
         }
}

//localStorage.clear();
 