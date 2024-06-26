import leia from 'readline-sync';

var anterior = 1;
var atual = 1;
var proxima;

var numero = leia.questionInt("Digite um numero: ");

for (var i = 3; i < numero; i++) {
    anterior + atual == proxima;
    proxima + anterior == atual;
    atual + proxima == anterior;
}

console.log(anterior);