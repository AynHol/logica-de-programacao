import leia from 'readline-sync'

var numero = leia.questionInt("\nDigite um numero: ");
if (numero % 2 === 0) {
    console.log("Numero Par")
} else {
    console.log("Numero Impar")
}