import read from 'readline-sync'

var opcao = read.keyInSelect([
    "C -> F",
    "C -> K",
    "K -> C",
    "K -> F",
    "F -> C",
    "F -> K"
], "Selecione a opcao") + 1

var temp = read.questionFloat("Informe a temperatura: ")

switch (opcao) {
    case 1:
        var F = (temp * 1.8) + 32
        console.log(`Valor em Fahrenheit: ${F}`)
        break
    case 2:
        var K = temp + 273.15
        console.log(`Valor em Kelvin: ${K}`)
        break
    case 3:
        var C = temp - 273.15
        console.log(`Valor em Celcius: ${C}`)
        break
    case 4:
        var F = (temp - 273.15) * 1.8 + 32
        console.log(`Valor em Fahrenheit: ${F}`)
        break
    case 5:
        var C = (temp - 32) * (5 / 9)
        console.log(`Valor em Celcius: ${C}`)
        break
    case 6:
        var K = (temp - 32) * (5 / 9) + 273.15
        console.log(`Valor em Kelvin: ${K}`)
        break
}