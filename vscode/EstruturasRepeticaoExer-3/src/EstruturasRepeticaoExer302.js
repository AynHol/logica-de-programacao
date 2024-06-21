import leia from 'readline-sync';

var numero = leia.questionInt("Digite um numero: ");

if (numero > 0) {
    while (numero >= 0) {
        console.log((numero--));
    }
} else {
    while (numero <= 0) {
        console.log((numero++));
    }
}