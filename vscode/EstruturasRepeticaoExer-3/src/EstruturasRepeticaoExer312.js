import leia from 'readline-sync';

var numero = leia.questionInt("Digite um numero: ");
var fatorial = 1;

for (var i = numero; i > 0; i--) {
    fatorial *= i;
}

console.log("O fatorial de " + numero + " é: " + fatorial);