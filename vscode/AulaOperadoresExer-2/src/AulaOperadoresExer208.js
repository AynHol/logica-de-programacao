import leia from "readline-sync"

var mes = leia.questionInt("\nMes: ");
switch (mes) {
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("O mês tem 30 dias");
        break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("O mês tem 31 dias");
        break;
    case 2:
        console.log("O mês tem 28/29 dias");
        break;
    default:
        console.log("Mês invalido!");
}