import leia from 'readline-sync';

for (var i = 0; i <15; i++ ){
    var numero = leia.questionInt("Digite um numero: ");
    var menor = numero;
    if (numero > menor) {
        var maior = numero;
    }
}

console.log("O número menor é " + menor + ", e o maior é " + maior);