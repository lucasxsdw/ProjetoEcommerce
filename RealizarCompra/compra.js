const img = document.querySelectorAll(".container-imgSmall img");

const imgPrincipal = document.querySelector(".container-img .img-camisa");

imgPrincipal.addEventListener("click", () => {
    imgPrincipal.classList.toggle("imgZom");
});

img.forEach((imagem) => {
    imagem.addEventListener("click", () => {
        imgPrincipal.setAttribute("src", imagem.getAttribute("src"));
          
    });



});

    


const button = document.querySelectorAll(".tamanhos .tam");

button.forEach((myButton) => {
    myButton.addEventListener("click", () => {
        button.forEach((btn) => {
            btn.classList.remove("selected");
            btn.classList.remove("ativo");


        })

        myButton.classList.toggle("ativo");
    });
      
         myButton.classList.add("selected");
       
   
});



