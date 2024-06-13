import leia from 'readline-sync'

var senhad = leia.questionFloat("\nDigite a sua senha: ");

if (senhad === 1234) {
    console.log("Senha Correta.")
} else {
    console.log("Senha Incorreta.")
}