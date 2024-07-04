import read from 'readline-sync';

var list = [];
var result = 0;

for (var i = 0; i < 5; i++) {
    list[i] = read.questionInt("Digite um numero: ");
    result += list[i];
}

console.log("A soma é " + result);

for(var j = 0; j < list.length; j++){
    console.log(list[j]);
}