import read from 'readline-sync'

var texto = read.question("Digite um texto/palavra: ")
var contVogais = 0

for (var i = 1; i < texto.length; i++) {
    if (
        texto[i] === 'a' &&
        texto[i] === 'e' &&
        texto[i] === 'i' &&
        texto[i] === 'o' &&
        texto[i] === 'u') {
        contVogais++
    }
}

console.log(`O texto/palavra tem: ${i} Vogais`)