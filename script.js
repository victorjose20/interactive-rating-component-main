const part1 =  document.querySelector(".part-1");
const part2 = document.querySelector(".part-2");
const submit = document.querySelector(".submit");
const botao = document.querySelector(".botao");
let botoes = document.querySelector(".botoes")
let numeros = document.querySelector(".numero")




 botoes.addEventListener("click", event => {
    let numerosele = event.target.innerText;
    numeros.innerText = numerosele;
    if(numerosele > 0 || numerosele <= 5){
        submit.addEventListener("click", () => {
            part2.classList.remove("alternativo");
            part1.style.display = "none";
        
         })
    }

 })