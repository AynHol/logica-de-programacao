import leia from 'readline-sync'

var placa = leia.question("\nDigite uma placa: ");
var final = placa.charAt(placa.length - 1)


switch (final) {
    case "0":
    case "1":
        console.log("Não pode andar Segunda-Feira")
        break;
    case "2":
    case "3":
        console.log("Não pode andar Terça-Feira")
        break;
    case "4":
    case "5":
        console.log("Não pode andar Quarta-Feira")
        break;
    case "6":
    case "7":
        console.log("Não pode andar Quinta-Feira")
        break;
    case "8":
    case "9":
        console.log("Não pode andar Sexta-Feira")
        break;
}