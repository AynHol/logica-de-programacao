import leia from 'readline-sync'

var nome = leia.question("\nNome do funcionario: ");
var salario = leia.questionFloat("Salario: ");
var dependente = leia.questionInt("Dependentes: ");

if (dependente == 0) {
    var final = salario * 1.02;
} else if (dependente == 1) {
    var final = salario * 1.05;
} else if (dependente == 2) {
    var final = salario * 1.07;
} else if (dependente == 3) {
    var final = salario * 1.10;
} else {
    var final = salario * 1.15;
}

console.log("O salário final de " + nome + " é " + final.toFixed(2) + " Reais.");