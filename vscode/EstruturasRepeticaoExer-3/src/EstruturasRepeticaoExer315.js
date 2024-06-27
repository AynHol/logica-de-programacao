import leia from 'readline-sync';

var altmaior;
var altmenor;
var altanterior = 0;
var altanterior2 = 0;
var nm = 0;
var nh = 0;

for (var i = 0; i < 10; i++) {
    console.log("Digite o seu genero:");
    console.log("0 - Masculino");
    console.log("1 - Feminino");
    var gen = leia.questionInt();
    var altura = leia.questionFloat("Digite a sua altura: ");

    if (i === 0) {
        altmaior = altura;
        altmenor = altura;
    }
    if (altura < altmenor) {
        altmenor = altura;
    }
    if (altura > altmaior) {
        altmaior = altura;
    }

    if (gen === 1) {
        nm++;
        var alturam = altura;
        if (i !== 0) {
            altanterior = alturam;
        }
        alturam += + altanterior;
    }

    var alturag = altura;
    if (i !== 0) {
        altanterior2 = alturag;
    }
    alturag += altanterior2;

    if (gen === 0) {
        nh++
    }
}

var mediaM = alturam / nm;
var mediaG = alturag / 10
var percentualH = (nh / 10) * 100;

console.log("A maior altura é: " + altmaior);
console.log("A menor altura é: " + altmenor);
console.log("A média de altura das mulheres é de: " + mediaM);
console.log("A média de altura da população é de: " + mediaG);
console.log("O percentural de homens na população é de: " + percentualH);