import leia from 'readline-sync';

var numero = leia.questionInt("Digite um numero decimal: ");
console.log("O número decimal em binário é: ");
var valor = numero;
var bi = "";

while(valor < 0){
    var resul = parseInt(valor / 2);
    var resul2 = valor % 2;
    bi = bi + resul2;
    valor = resul;
}

console.log()


// numero / 2 == resul;
// numero % 2 == resul2;

// do {
//     resul / 2 == resul;
//     resul % 2 == resul2;

//     if (resul == 1 || 0) {
//         console.log(resul)
//     }

//     console.log(resul2)
// } while (resul !== 1 || 0)