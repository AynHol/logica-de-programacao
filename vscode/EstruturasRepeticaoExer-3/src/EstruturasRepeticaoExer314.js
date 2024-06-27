import leia from 'readline-sync';

var nomemaior;
var notamaior;

for (var i = 0; i < 10; i++) {
    var nome = leia.question("Nome do estudante: ");

    var nota1 = leia.questionFloat("1 nota do estudante: ");
    // var peso1 = leia.questionFloat("1 peso da nota: ");
    var nota2 = leia.questionFloat("2 nota do estudante: ");
    // var peso2 = leia.questionFloat("2 peso da nota: ");
    var nota3 = leia.questionFloat("3 nota do estudante: ");
    // var peso3 = leia.questionFloat("3 peso da nota: ");

    // var media = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3);
    // var media2 = peso1 + peso2 + peso3;
    // var nota = media / media2;
    var nota = nota1 + nota2 + nota3 / 3;

    if (i === 0) {
        notamaior = nota;
        nomemaior = nome;
    }

    if (nota > notamaior) {
        notamaior = nota;
        nomemaior = nome;
    }
}

console.log("A maior media é: " + notamaior + ", do estudante: " + nomemaior + ".")