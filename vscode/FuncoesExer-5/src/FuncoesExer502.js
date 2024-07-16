import { preencherVetor } from './utils/preencherVetor.js'
import { verificaDuplicidade } from './utils/verificaDuplicidade.js'

export function FuncoesExer502() {
    var vetor = preencherVetor(10, 0, 50);
    var temDuplicidade = verificaDuplicidade(vetor);
    console.log(vetor)
    if (temDuplicidade) {
        console.log("Tem duplicidade")
    } else {
        console.log("Não tem duplicidade")
    }
}