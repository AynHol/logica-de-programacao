import leia from 'readline-sync';

// var estacarregando = true;
// var porcentagem = 0;

// while (estacarregando) {
//     console.log(porcentagem + "% CARREGANDO...");

//     if (porcentagem < 100) {
//         porcentagem += 5;
//     } else {
//         estacarregando = false;
//     }
// }

//-------------------------------------//

var nota = leia.questionFloat("Digite a nota: ");
while(nota < 0.0 || nota > 10.0){
    console.log("Nota invalida");
    nota = leia.questionFloat("Digite a nota novamente: ");
}
console.log("Nota valida!")