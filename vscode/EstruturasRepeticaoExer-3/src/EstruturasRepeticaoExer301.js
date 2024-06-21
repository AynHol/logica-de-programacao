import leia from 'readline-sync';

var numero = leia.questionInt("Digite um numero: ");
var zero = 0;

while (zero <= numero) {
    console.log((zero++));
}