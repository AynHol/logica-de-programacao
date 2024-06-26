import leia from 'readline-sync';

var menor;
var maior;

for (var i = 0; i < 15; i++) {
    var numero = leia.questionInt("Digite um numero: ");

    if(i === 0){
        menor = numero;
        maior = numero;
    }

    if(numero < menor) {
        menor = numero;
    }

    if(numero > maior){
        maior = numero;
    }
}

console.log("O número menor é " + menor + ", e o maior é " + maior);