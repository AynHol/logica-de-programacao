import read from 'readline-sync';

var list = [];

for (var i = 0; i < 10; i++) {
    list[i] = read.questionInt("Digite um numero: ");
}

var list2 = list.filter(number => number % 2 == 0);

console.log(list2);