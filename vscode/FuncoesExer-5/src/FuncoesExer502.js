function vetor() {
    var array = []
    for (var i = 0; i < 10; i++) {
        array[i] = parseInt(Math.random() * 100)
    }
    return array
}

var vetor1 = vetor()
var ordem = vetor1.sort()
var cont = 0
var anterior = 0
var atual = 0

for (var i = 0; i < 10; i++) {
    atual = ordem[i]
    if (i === 0) {
        anterior = atual
        atual = -1
    } if (anterior === atual) {
        cont++
        anterior = atual
        atual = -1
    } else {
        if (i !== 0) {
            anterior = atual
            atual = -1
        }
    }
}

console.log(ordem)
console.log(cont)

// erro no codigo = mesmo número repitido mais do que uma vez ele conta como mais de uma repitição.
// ex: [1, 3, 3, 4, 7] = 1 repitido; [1, 3, 3, 6, 7, 7] = 2 repetidos; [1, 3, 4, 4, 4, 8] = 2 repitidos.