import read from 'readline-sync'

var notas = []
for (var i = 0; i < 6; i++) {
    notas.push(read.questionInt(`Digite a ${i + 1} nota: `))
}

var maior = Math.max(...notas)
var menor = Math.min(...notas)

var soma = 0
for (var i = 0; i < 6; i++){
    soma += notas[i]
}
soma -= (maior + menor)
var media = soma / 4

console.log(`A media é: ${media}`)
