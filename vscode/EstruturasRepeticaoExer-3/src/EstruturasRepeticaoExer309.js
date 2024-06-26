import leia from 'readline-sync';

var contador = 0;

do {
    var numero = leia.questionInt("Digite um numero: ");
    if (numero > 100 && numero < 200) {
        contador++;
    }
} while (numero !== 0);

console.log("Foram digitados " + contador + " números entre 100 e 200.")