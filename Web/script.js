/*

document -> HTML

getElementById -> Trás UM elemento pelo ID
getElementByClassName -> Trás TODOS os elementos com essa classe
getElementByTagNAme -> Trás TODOS os elementos com essa TAG
getElementByName -> Trás TODOS os elementos com esse NAME

querySelector -> Trás UM elemento, o PRIMEIRO que encontrar
querySelectAll -> Trás TODOS os elementos que encontrar

todos usao aspas duplas

Alterando e Acessando textos

    textContent -> Pega todo o conteúdo
    innerText -> Pega APENAS o texto
    innerHTML -> Permite adcionar HTML e texto
*/

const elements = document.querySelector(".paragraph-js")

console.log(elements.textContent) // SÓ HTML
console.log(elements.innerText) // LEVA EM CONTA O CSS
console.log(elements.innerHTML) // TRÁS TUDO -> Permite adicicionar HTML

const button = document.querySelector("h1")

button.style.backgroundColor = "red"
button.style.fontSize = "33px"
