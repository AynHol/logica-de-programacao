import read from 'readline-sync'

var n1 = read.questionInt("Informe a primeira nota: ")
var n2 = read.questionInt("Informe a segunda nota: ")
var n3 = read.questionInt("Informe a terceira nota: ")
var n4 = read.questionInt("Informe a quarta nota: ")
var n5 = read.questionInt("Informe a quinta nota: ")
var n6 = read.questionInt("Informe a sexta nota: ")
var maior = n1
var menor = n1

if (n2 > maior) {
    maior = n2
} if (n3 > maior) {
    maior = n3
} if (n4 > maior) {
    maior = n4
} if (n5 > maior) {
    maior = n5
} if (n6 > maior) {
    maior = n6
}

if (n2 < menor) {
    menor = n2
} if (n3 < menor) {
    menor = n3
} if (n4 < menor) {
    menor = n4
} if (n5 < menor) {
    menor = n5
} if (n6 < menor) {
    menor = n6
}

var soma = n1 + n2 + n3 + n4 + n5 + n6
soma -= maior + menor

var media = soma / 4

console.log("A media é " + media)