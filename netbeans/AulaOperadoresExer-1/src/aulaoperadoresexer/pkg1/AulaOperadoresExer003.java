package aulaoperadoresexer.pkg1;

import java.util.Scanner;

public class AulaOperadoresExer003 {
    
    public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);
        
        System.out.println("Escreva quantos anos, meses e dias: ");
        int ano = leia.nextInt();
        int mes = leia.nextInt();
        int dia = leia.nextInt();
        
        int resultado1 = ano * 365;
        int resultado2 = mes * 30;
        int resultadof = resultado1 + resultado2 + dia;
        
        System.out.println("A sua idade em dias é: " + resultadof + " dias.");
        
    }
}
