import leia from 'readline-sync'

var idade = leia.questionInt("\nSua idade: ");

if (idade >= 18) {
    var nome = leia.question("Seu nome completo: ");
} else {
    var permissao = leia.question("Permissao dos responsaveis: ");
    if (permissao === "sim") {
        var nome = leia.question("Seu nome completo: ");
        console.log(nome + " está cadastrado na viagem.");
    } else if (permissao === "nao") {
        console.log("Sem permissão para ir na viagem")
    } else {
        console.log("Resposta invalida, tente: 'sim' ou 'nao'")
    }
}