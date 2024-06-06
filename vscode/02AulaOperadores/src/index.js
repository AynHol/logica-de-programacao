import leia from "readline-sync"

var pcorrida = leia.questionFloat("\nValor da primeira corrida: ")
var scorrida = leia.questionFloat("Valor da segunda corrida: ")
var tcorrida = leia.questionFloat("Valor da terceira corrida: ")
var qcorrida = leia.questionFloat("Valor da quarta corrida: ")
var qucorrida = leia.questionFloat("Valor da quinta corrida: ")

var corridas = pcorrida + scorrida + tcorrida + qcorrida + qucorrida
var final = corridas - (corridas * 0.25)
console.log("\nO todal das 5 corridas deu: " + corridas + " R$")
console.log("O valor arrecadado pelo motorista deu: " + final + " R$\n")