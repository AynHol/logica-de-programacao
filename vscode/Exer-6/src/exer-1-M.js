import read from 'readline-sync'

var num = []
for (var i=0;i<3;i++){
    num[i] = read.questionInt("Informe o numero " + (i + 1) + ": ")
}

var numOrdem = num.sort() 
console.log(numOrdem)