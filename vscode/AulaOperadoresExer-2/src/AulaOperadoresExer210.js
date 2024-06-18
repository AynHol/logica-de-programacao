import leia from 'readline-sync'

console.log("Quanto você pretende doar?");
console.log("1 - 10R$");
console.log("2 - 25R$");
console.log("3 - 50R$");
console.log("4 - Outro valor");
var opcao = leia.question("Informe a opção: ");

if(opcao == "1"){
    console.log("Você doou 10R$, muito obrigado!");
} else if(opcao == "2"){
    console.log("Você doou 25R$, muito obrigado!");
} else if(opcao == "3"){
    console.log("Você doou 50R$, muito obrigado!");
} else if (opcao == "4"){
    var valor = leia.question("Informe o valor: ");
    console.log("Você doou " + valor + "R$, muito obrigado!");
} else{
    console.log("Opção desconhecida.");
}