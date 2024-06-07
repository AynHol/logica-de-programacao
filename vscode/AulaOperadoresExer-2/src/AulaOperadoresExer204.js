import leia from 'readline-sync'

var compra = leia.questionInt("Numero de macas compradas?: ");

if (compra < 12) {
    var final = compra * 0.30;
    console.log("A compra custara " + final + " R$.");
} else {
    var final = compra * 0.25;
    console.log("A compra custara " + final + " R$.");
}