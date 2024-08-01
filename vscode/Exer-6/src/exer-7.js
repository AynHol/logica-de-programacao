import read from 'readline-sync'
var melhorJogador
var melhorPontuacao
var time = []

for (var i = 0; i < 11; i++) {
    var nome = read.question("Informe o nome do jogador: ")
    var qtdGols = read.questionInt("Informe a qtd gols: ")
    var qtdPC = read.questionInt("Informe a qtd passes certos: ")
    var qtdPe = read.questionInt("Informe a qtd passes errados: ")

    var pontos = (qtdGols * 50) + (qtdPC * 10) + (qtdPe * -5)

    var obj = {
        nome: nome,
        gols: qtdGols,
        passesCertos: qtdPC,
        passesErrados: qtdPe,
        pontos: pontos
    }
    time.push(obj)

    if(melhorPontuacao === undefined || pontos > melhorPontuacao){
        melhorJogador = nome
        melhorPontuacao = pontos
    }

    if (pontos < 50) {
        console.log(`${nome} Fez uma pessima jogada!`)
    } else if (pontos >= 50 && pontos < 100) {
        console.log(`${nome} Fez uma partida ruim!`)
    } else if (pontos >= 100 && pontos < 150) {
        console.log(`${nome} Fez fez o basico!`)
    } else if (pontos >= 150 && pontos < 200) {
        console.log(`${nome} Foi bem na partida!`)
    } else {
        console.log(`${nome} JOGOU DEMAIS!!!`)
    }
}

console.log(`${melhorJogador} Foi o melhor jogador! com ${melhorPontuacao} pontos!!`)
console.log(time)