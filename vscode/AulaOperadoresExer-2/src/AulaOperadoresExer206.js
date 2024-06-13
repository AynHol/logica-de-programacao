import leia from "readline-sync";

var valorProduto = leia.questionFloat("\nValor do produto");

var umReal = leia.questionInt("Numero de moedas de R$1 ");
var cinquenta = leia.questionInt("Numero de moedas de R$0,50 ");
var vinteCinco = leia.questionInt("Numero de moedas de R$0,25 ");
var dez = leia.questionInt("Numero de moedas de R$0,10 ");
var cinco = leia.questionInt("Numero de moedas de R$0,05 ");

var total = (umReal * 1) + (cinquenta * 0.50) + (vinteCinco * 0.25) + (dez * 0.10) + (cinco * 0.05)

console.log("Valor do produto: " + valorProduto);
console.log("Total no porquinho: " + total)

var mensagem = total >= valorProduto ? "Da para comprar o produto!" : "não da para comprar o produto!";
console.log(mensagem);