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

// var nota = leia.questionFloat("Digite a nota: ");
// while(nota < 0.0 || nota > 10.0){
//     console.log("Nota invalida");
//     nota = leia.questionFloat("Digite a nota novamente: ");
// }
// console.log("Nota valida!");

//-------------------------------------//

// var numero = leia.questionInt("Digite um número");

// var multi = 0;
// while (multi <= 100) {
//     console.log((multi * numero));
//     multi += 10;
// }

// for (var i = 0; i <= 100; i++) { }

//-------------------------------------//

// var numero = leia.questionInt("Digite um número");

// for (var i = 0; i <= 100; i++) {
//     var resultado = i * numero;
//     console.log(numero + " X " + i + " = " + resultado);
//     if (i === 10) {
//         i = 200;
//     }
// }

//-------------------------------------//

// var numero = leia.questionInt("Digite um número");

// for (var i = 0; i <= 100000; i++) {
//     var resultado = i * numero;
//     console.log(numero + " X " + i + " = " + resultado);
// }

// var qualquer = leia.question("E ai, cansou??? ");

//-------------------------------------//

// var placa = leia.question("Digite placa: ");

// for (var i = 0; i <= placa.length; i++) {
//     console.log(placa[i]);
// }

//-------------------------------------//

// for (var i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

//-------------------------------------//

// var n1 = leia.questionInt("Digite o primeiro numero: ");
// var n2 = leia.questionInt("Digite o segundo numero: ");
// var passo = leia.questionInt("Numero de passos: ");

// for (var i = n1; i <= n2; i += passo) {
//     console.log(i);
// }