import leia from "readline-sync"
// IF/ELSE

//var x = 10;
//if (x < 100) {
//    console.log("Menor que cem");
//} else if (x < 1000) {
//    console.log("Menor que mil");
//}

// SWITCH/CASE

var codigoErro = leia.questionInt("Digite o codigo de erro: ");
switch (codigoErro) {
    case 400:
    case 401:
    case 404:
        console.log("HTTP code - error aplicação")
        break;
    case 500:
    case 501:
    case 502:
        console.log("HTTP code - error de servidor")
        break;
    default:
        console.log("Não é erro")
        break;
}