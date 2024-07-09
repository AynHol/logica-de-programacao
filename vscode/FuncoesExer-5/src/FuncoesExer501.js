function vetor() {
    var array = []
    for (var i = 0; i < 9; i++) {
        array[i] = parseInt(Math.random() * 100)
    }
    return array
}

var vetor1 = vetor()
var vetor2 = vetor()
var vetor3 = vetor()
var vetorf = []

for (var i = 0; i < 9; i++) {
    if (i < 3) {
        vetorf[i] = vetor1[i]
    } else if (i > 2 && i < 6) {
        vetorf[i] = vetor2[i]
    } else {
        vetorf[i] = vetor3[i]
    }
}

console.log("O vetor final é = ", vetorf)
console.log("O vetor 1 é = ", vetor1)
console.log("O vetor 2 é = ", vetor2)
console.log("O vetor 3 é = ", vetor3)