import read from 'readline-sync';

var list = [];
var list2 = [];

for (var i = 0; i < 10; i++) {
    list[i] = read.questionInt("Informe um numero: ");
    list2[i] = list[i] * 5;
}

console.log("Primeira lista = " + list);
console.log("Segunda lista = " + list2);