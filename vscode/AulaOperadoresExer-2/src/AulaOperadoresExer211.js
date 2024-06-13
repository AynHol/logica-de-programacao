import leia from 'readline-sync'

var time1 = leia.questionInt("\nQuantidade de gols do time 1: ");
var time2 = leia.questionInt("Quantidade de gols do time 2: ");

var diferenca = Math.abs(time1 - time2)

if (diferenca === 0) {
    console.log("Resultado da partida: Empate.");
} else if (diferenca >= 1 && diferenca <= 3) {
    console.log("Resultado da partida: Partida normal.");
} else {
    console.log("Resultado da partida: GOLEADA!");
}