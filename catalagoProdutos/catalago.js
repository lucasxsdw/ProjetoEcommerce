const carrinho = document.querySelector(".carrinho")
const button = document.querySelector(".cart-button")
const fechar = document.querySelector(".fecharCarrinho")

button.addEventListener("click", (e) => {
    e.preventDefault();
    carrinho.classList.toggle("ativarCarrinho");
});

fechar.addEventListener("click", () => {
    carrinho.classList.remove("ativarCarrinho"); 
});