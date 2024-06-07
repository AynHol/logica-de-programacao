import leia from 'readline-sync'

var nome1 = leia.question("Nome do primeiro cliente: ");
var numero1 = leia.questionFloat("Valor gasto: ");
var nome2 = leia.question("Nome do segundo cliente: ");
var numero2 = leia.questionFloat("Valor gasto: ");

var total = numero1 + numero2;
var media = total / 2;

console.log("Os dois clientes gastaram no total " + total + " Reais.");
console.log("O valor médio gasto é de " + media + " Reais.");

if (numero1 > 20) {
    console.log("O cliente: " + nome1 + ", efetuou uma compra acima de 20 Reais.");
}
if (numero2 > 20) {
    console.log("O cliente: " + nome2 + ", efetuou uma compra acima de 20 Reais.");
}