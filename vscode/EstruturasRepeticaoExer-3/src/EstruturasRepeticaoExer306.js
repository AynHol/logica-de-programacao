import leia from 'readline-sync';

var numero = leia.questionInt("Digite um numero para a tabuada: ");

for (var i = 1; i <= 10; i++) {
    console.log(numero * i);
}
