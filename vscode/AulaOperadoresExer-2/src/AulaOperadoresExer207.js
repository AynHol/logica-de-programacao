import leia from 'readline-sync'

var salario = leia.questionFloat("\nSalario: ");
var valoremp = leia.questionFloat("Valor de emprestimo: ");
var npres = leia.questionFloat("Numero de parcelas: ");

var valorp = valoremp / npres;
var posb = salario * 0.30;

var form = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
});

console.log("Limite: " + form.format(posb));
console.log("Valor emprestimo: " + form.format(valoremp) + " em " + npres + "x");
console.log("Valor parcela: " + form.format(valorp));

var mg = (valorp <= posb) ? "Você não pode pegar um emprestimo." : "Você pode pegar um emprestimo.";
console.log(mg);