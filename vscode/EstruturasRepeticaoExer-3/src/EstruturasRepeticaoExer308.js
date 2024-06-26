import leia from 'readline-sync';

var soma = 0;
var mult = 1;

for (var i = 0; i < 6; i++) {
    var numero = leia.questionInt("Digite um numero: ");
    if (numero % 2 == 0) {
        mult *= numero;
    } else {
        soma += numero;
    }
}

console.log("A soma dos números impares é " + soma + ", e a multiplicação dos números pares é " + mult);