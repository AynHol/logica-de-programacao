import read from 'readline-sync';

var list = [];

for (var i = 0; i < 15; i++) {
    list[i] = read.questionInt("Digite um numero: ");
}

var list2 = list.filter(number => number >= 10);

console.log(list2);