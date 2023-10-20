let valor = 9
let valor2 = "9"
let nome = "Dudu"
const url = "https://google.com.br"

console.log(valor)
console.log(typeof(valor))
console.log(typeof(valor2))
console.log(url)

function oie(){
    console.log("Olá, mundo!")
}

oie()

function soma(num1, num2){
    return num1 + num2
}

console.log(soma(6, 9))

// arrow function
const olaMundo = () => console.log("Olá, novo mundo!")

olaMundo()

const somaNum = (num1, num2) => num1 + num2
console.log(somaNum(19, 7))