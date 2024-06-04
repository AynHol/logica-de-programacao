package aulaoperadoresexer.pkg1;

import java.util.Scanner;

public class AulaOperadoresExer002 {
    
    public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);
        
        System.out.println("Largura: ");
        double numero1 = leia.nextDouble();
        System.out.println("Altura: ");
        double numero2 = leia.nextDouble();
        
        double resultado = numero1 * numero2;
        System.out.println("A área é: " + resultado);
    }
}
