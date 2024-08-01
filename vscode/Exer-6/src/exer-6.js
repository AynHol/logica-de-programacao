const tentativas = 1000
var verde = 0, vermelho = 0, preto = 0
var index = 0

function calculaPorcentagem(vezesQueCaiu) {
    return (vezesQueCaiu / tentativas) * 100

}

function selecionaContador(valor) {
    valor === 0 ? verde++ : valor % 2 === 0 ? preto++ : vermelho++
}

while (index < tentativas) {
    var sorteado = parseInt(Math.random() * 37)
    selecionaContador(sorteado)
    index++
}

var vermelhoPorc = calculaPorcentagem(vermelho)
var verdePorc = calculaPorcentagem(verde)
var pretoPorc = calculaPorcentagem(preto)

console.log(`Vermelho - Qtd: ${vermelho} - Porcentagem ${vermelhoPorc.toFixed(2)}`)
console.log(`Preto - Qtd: ${preto} - Porcentagem ${pretoPorc.toFixed(2)}`)
console.log(`Verde - Qtd: ${verde} - Porcentagem ${verdePorc.toFixed(2)}`)

if (verdePorc > 40 || vermelhoPorc > 40 || pretoPorc > 40) {
    console.log("Pode estar viciada!!!")
} else {
    console.log("Não tem chance de estar viciada!")
}