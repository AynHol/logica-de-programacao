import leia from 'readline-sync'
import { FuncoesExer501 } from './FuncoesExer501.js';
import { FuncoesExer502 } from './FuncoesExer502.js';

var opcao = leia.keyInSelect(["Exercicio 01", "Exercicio 02"]) + 1;

switch(opcao){
    case 1: 
        FuncoesExer501();
        break;
    case 2: 
        FuncoesExer502();
        break;
}