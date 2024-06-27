import leia from 'readline-sync';

var numero = leia.questionInt("Digite um numero decimal: ");
var bi = "";

while(numero > 0){
    var resul = parseInt(numero / 2);
    var resul2 = numero % 2;
    bi = resul2 + bi;
    numero = resul;
}

console.log(bi)