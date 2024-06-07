import leia from 'readline-sync'

var produto = leia.questionFloat("Qual o valor do produto?: ");
var moeda1 = leia.questionInt("Quantas moedas de 1 real tem no cofrinho?: ");
var moeda50 = leia.questionInt("Quantas moedas de 50 centavos tem no cofrinho?: ");
var moeda25 = leia.questionInt("Quantas moedas de 25 centavos tem no cofrinho?: ");
var moeda10= leia.questionInt("Quantas moedas de 10 centavos tem no cofrinho?: ");
var moeda5 = leia.questionInt("Quantas moedas de 5 centavos tem no cofrinho?: ");

var moeda1 = 1
var moeda50 = 0.50
var moeda25 = 0.25
var moeda10 = 0.10
var moeda5 = 0.05

var total = moeda1 + moeda50 + moeda25 + moeda10 + moeda5;

console.log(total)

// if (produto >= total){
//     console.log("Tem dinheiro suficiente no cofrinho.");
// } else {
//     console.log("Não tem dinheiro suficiente no cofrinho.");
// }