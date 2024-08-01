import read from 'readline-sync'

var palavra = read.question("Digite palavra ou texto")
palavra = palavra.replaceAll(" ", "")
var palavraInvertida = ""

for (var i = 0 - 1; i <= palavra.length - 1; i++) {
    palavraInvertida = palavra[i] + palavraInvertida
}

if (palavra === palavraInvertida) {
    console.log("É palindromo")
} else {
    console.log("Não é palindromo")
}