var altValentina = 1.50;
var altJoao = 1.40;
var anos = 0;

while (altValentina >= altJoao) {
    altJoao += 0.03;
    altValentina += 0.02;
    anos++;
}

console.log("Demorou " + anos + " anos para Joãozinho ficar maior que Valentina.");
console.log("Joãozinho = " + altJoao.toFixed(2));
console.log("Valentina = " + altValentina.toFixed(2));