var baixas = [];
var altas = [];

for (var i = 0; i < 30; i++) {
    var random1 = parseInt(Math.random() * 23) + 12;
    var random2 = parseInt(Math.random() * 23) + 12;
    if (random1 < random2) {
        altas[i] = random2;
        baixas[i] = random1;
    } else {
        altas[i] = random1;
        baixas[i] = random2;
    }
}

console.log("Temperaturas baixas: " + baixas);
console.log("Temperaturas altas: " +altas);