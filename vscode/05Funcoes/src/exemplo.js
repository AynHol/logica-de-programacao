import read from 'readline-sync'
//------------------------------------------------------------//

function mostrar() {
    var nome = read.question("Digite o nome: ")
    console.log("Olá, " + nome)
}

mostrar()
mostrar()

//------------------------------------------------------------//
//função sem parâmetro e retorno.

function somar() {
    var num1 = read.questionInt("Digite o numero: ")
    var num2 = read.questionInt("Digite o numero: ")
    var result = num1 + num2
    console.log("O resultado é: " + result)
}

somar()


//------------------------------------------------------------//
//função com parâmetro sem retorno.

function subtrair(num1, num2) {
    var result = num1 - num2
    console.log("O resultado é: " + result)
}

var num1 = read.questionInt("Digite o numero: ")
var num2 = read.questionInt("Digite o numero: ")

subtrair(num1, num2)
subtrair(10, 5)

//------------------------------------------------------------//
//função com parâmetro e retorno.

function multi(num1, num2) {
    var result = num1 * num2
    return result
}

var resultado = multi(5, 5)
console.log(resultado)

//------------------------------------------------------------//
//função sem parâmetro com retorno.

function div(){
    var result = num1 / num2
    return result
}

var resultado2 = div(20, 10)
console.log(resultado2)