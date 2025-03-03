const menu = document.querySelector(".menu");
const menuContainer = document.querySelector(".menu-container") ;
const fecharMenus = document.querySelector(".fecharMenu");


function abrirMenu(){
    menuContainer.classList.add("menu-ativo");
}

function fecharMenu(){
    menuContainer.classList.remove("menu-ativo")
}


menu.addEventListener("click", (e)=>{
    e.preventDefault();
    abrirMenu();
});


fecharMenus.addEventListener("click", (a)=>{
    a.preventDefault();
    fecharMenu();
});