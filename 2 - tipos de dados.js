/*
1. String -> Textos.
2. Number -> Números
3. Boolean -> Boleano
4. Object -> Objetos
5. Null & Undefined

ESTRUTURA DE DADOS

1. Array -> Vetor

*/

const texto1 = "textos com aspa duplas"
const texto2 = 'textos com aspa simples'
const texto3 =`textos com crase` // posso pular quantas linhas eu quiser/ Template literals ou Template String

console.log(texto1)

const myAge = 30

const myCar = 'Audi'

const myString = ` Minha idade é ${myAge}, to ficando velho.
Mas pelo mensos to andando de ${myCar} `

console.log(myString)
//----------------------------------------- TIPO NUMBER ---------------------------------------------------------------------------//
const numero1 = 32  / 2 // tipo de dado de NUMBER
const fakeNumeber = "32/2" // tipo de dado STRING

console.log(numero1)
console.log(fakeNumeber)
//--------------------------------------- TIPO BOOLEAN -----------------------------------------------------------------------------//

const verdadeiro = true
const falso = false
//------------------------------------------------ TIPO OBJECT -------------------------------------------------------------------//

const cleber = {
    name: "Cleber",
    age: 30,
    adress: {
        street: 'Pau Brasil',
        number: 67,
        city: 'Rio de Janeiro',
        state: 'RJ',
        country: 'Brazil'
    }
}

cleber.adress.number = 80
cleber.name = 'Aline'

console.log(cleber)
//------------------------------------------------- TIPO NULL & UNDEFINED ------------------------------------------------------------------//
const user = {
    nome: "Cleber",
    idade: 30,
    nomedoConjuge:"Larissa",
    id:null
}

console.log(user.abacate)
//----------------------------------------------------- ESTRUTURA DE DADOS - ARRAYS --------------------------------------------------------------//

const myArray = [20, 30, 456]
console.log(myArray[0])
myArray[1] = 34
console.log(myArray)

const users = [{
    nome: "Cleber",
    idade: 21,
    nomedoConjuge:"Larissa",
    id:null
},
{
    nome: "Aline",
    idade: 20,
    nomedoConjuge:"Leo",
    id:null
}
]

