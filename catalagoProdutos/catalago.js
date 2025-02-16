const carrinho = document.querySelector(".carrinho")
//const button = document.querySelectorAll(".cart-button")
const fechar = document.querySelector(".fecharCarrinho")

////// listar carrinho
const listarContainer = document.querySelector(".produtoInfo");

/* 
button.addEventListener("click", (e) => {
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

        // Subir na hierarquia até o container do produto
        const produtoContainer = e.target.closest(".container-img");

        // Selecionar apenas os <p> dentro desse produto
        const descProduto = produtoContainer.querySelectorAll(".descricao-camisa p");
        const dados = Array.from(descProduto).map(p => p.textContent);

        const buscarItem = localStorage.getItem("descProduto");
        
        let array;
        if(buscarItem == null){
             array = [];
        } else{
            array = JSON.parse(buscarItem);
            
        }
        array.push({ produto: dados });

        
        localStorage.setItem("descProduto", JSON.stringify(array));
        
       
    });
});

function listaProdutos(){
    
}

//localStorage.clear();
 