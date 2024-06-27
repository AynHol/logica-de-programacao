import leia from 'readline-sync';

var numero = leia.questionInt("Digite um numero: ");

var anterior = 1;
var atual = 1;
var proxima;
var final = "1 - 1";

for (var i = 2; i < numero; i++) {
    proxima = anterior + atual;
    anterior = atual;
    atual = proxima;
    final = final + " - " + proxima;
}

console.log(final);