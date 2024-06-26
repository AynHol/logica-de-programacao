import leia from 'readline-sync';

console.log("Escolha o modo de jogo:");
console.log("1 - PvE");
console.log("2 - PvP");
var modo = leia.questionInt();

if (modo === 1) {
    console.log("Escolha a dificuldade:");
    console.log("1 - Facil");
    console.log("2 - Medio");
    console.log("3 - Dificil");
    var dificuldade = leia.questionInt();
}

var final = false;

if (modo === 1) {
    if (dificuldade === 1) {
        var numero = Math.floor(Math.random() * 1001);
        do {
            var adivinha = leia.questionInt("Digite o numero: ");
            if (adivinha === numero) {
                console.log("Parabens você ganhou!!");
                var final = true;
            } else if (adivinha < numero) {
                console.log("O número é maior");
            } else {
                console.log("O número é menor");
            }
        } while (final === false)
    } else if (dificuldade === 2) {
        var numero = Math.floor(Math.random() * 10001);
        do {
            var adivinha = leia.questionInt("Digite o numero: ");
            if (adivinha === numero) {
                console.log("Parabens você ganhou!!");
                final = true;
            } else if (adivinha < numero) {
                console.log("O número é maior");
            } else {
                console.log("O número é menor");
            }
        } while (final === false)
    } else {
        var numero = Math.floor(Math.random() * 1000001);
        do {
            var adivinha = leia.questionInt("Digite o numero: ");
            if (adivinha === numero) {
                console.log("Parabens você ganhou!!");
                final = true;
            } else if (adivinha < numero) {
                console.log("O número é maior");
            } else {
                console.log("O número é menor");
            }
        } while (final === false)
    }
}

else if (modo === 2) {
    var numero = leia.questionInt("Digite um numero para o segundo jogador: ")
    do {
        var adivinha = leia.questionInt("Digite o numero: ");
        if (adivinha === numero) {
            console.log("Parabens você ganhou!!");
            final = true;
        } else if (adivinha < numero) {
            console.log("O número é maior");
        } else {
            console.log("O número é menor");
        }
    } while (final === false)
}

else {
    console.log("Escolha um modo correto!");
}