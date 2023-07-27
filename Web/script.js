/*
Eventos

*/

const input = document.querySelector("#main-input")
const select = document.querySelector("select")
const button = document.querySelector(".main-button")

select.addEventListener("change", function(){
    console.log("Troquei de valor")
})

function troqueiValor(event) {
    console.log(event)
}

button.addEventListener("click", troqueiValor)