import read from 'readline-sync';

var list = [];

for (var i = 0; i < 5; i++) {
    list[i] = read.question("Digite algo: ");
}

list.reverse();
console.log(list);