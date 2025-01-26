// primeiro seleciona o evento
// ativa o metodo addEventListener
// declara o tipo do evento 


const btn = document.querySelector("#my-button")

btn.addEventListener("click", function(){
    console.log("clicou aqui ")
})

// remover um evento
const seconbtn = document.querySelector("#btn");

function imprimirMensagem(){
    console.log("teste");
}

seconbtn.addEventListener("click", imprimirMensagem);

const remuve = document.querySelector("#btn2");

remuve.addEventListener("click", () => {
    console.log("Removido")
    seconbtn.removeEventListener("click", imprimirMensagem);
})

// objeto do evento todo evento possui um argumento especial,
//  que contem suas informacoes chamdo de event ou e 

const titulo = document.querySelector("#titulo")

titulo.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.offsetX);
})

//propagacao e quando  um elemento do evento nao esta claramente definido, um outro elemento ativa p evento
// para isso usa-se o stopPropagation
 
const container = document.querySelector("#container");
const button = document.querySelector("#button");

container.addEventListener("click", () =>{
          console.log("evento 1")
})

button.addEventListener("click", (e)=>{
         e.stopPropagation();
          console.log("evento 2")
})

//removendo eventos padrao com o preventdefault

const a = document.querySelector("a")

a.addEventListener("click", (a) => {
         a.preventDefault()
         console.log("Nao alterou a pagina")
})


// eventos de teclas 
document.addEventListener("keyup", (e) =>{
    console.log(`Clicou no ${e.key}`)
})

document.addEventListener("keydown", (e) =>{
    console.log(` apertou a tecla ${e.key}`);
})

//eventos de mause 

const mause = document.querySelector("#mause")

mause.addEventListener("mousedown", ()=>{
    console.log("Pressionou o botao")
})

mause.addEventListener("mouseup", ()=>{
    console.log("soltou o botao")
})


mause.addEventListener("dblclick", ()=>{
    console.log("duplo click no botao")
})


/*eventos movimento do mause 

document.addEventListener("mousemove", (e) => {
    console.log(`no eixo x: ${e.x}`);
    console.log(`no eixo y: ${e.y}`);
    
})*/

// scroll realizar alguma funcao quando passar na posicao y
window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 400){
         console.log("passou")
    }
})

//eventos por foco

 const input = document.querySelector("#input")

 input.addEventListener("focus", (e) =>{
    console.log("entrou no input");
 })

 input.addEventListener("focus", (e) =>{
    console.log("saiu no input"); // pode fazer uma verificacao quando usuario sair 
 })

// carregamento de paginas 
window.addEventListener("load", () =>{
    console.log(" a pagina carregou")
})

window.addEventListener("beforeunload", (e) =>{
    e.preventDefault();
    e.returnValue = " "; // nao recomendado usar, pergunta antes de recarregar a pagina
})

// debounce
const debounce = (f, delay) => {

    let timeout;
    return (...arguments) => {
        if (timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay)
    }
}

window.addEventListener("mousemove", 
    
    debounce(()=>{
      console.log("executando a cada 400ms");
}, 400)
)