package aulaoperadoresexer.pkg1;

import java.util.Scanner;

public class AulaOperadoresExer004 {
    
    public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);
        
        System.out.println("Digite o total de eleitores:");
        double totaleleitor = leia.nextDouble();
        System.out.println("Digite a quantidade de votos brancos:");
        double votobranco = leia.nextDouble();
        System.out.println("Digite a quantidade de votos nulos:");
        double votonulo = leia.nextDouble();
        System.out.println("Digite a quantidade de votos válidos:");
        double votovalido = leia.nextDouble();
        
        double branco = (votobranco / totaleleitor) * 100;
        double nulo = (votonulo / totaleleitor) * 100;
        double valido = (votovalido / totaleleitor) * 100;
        
        System.out.println("Porcentagem Brancos: " + branco + "%");
        System.out.println("Porcentagem Nulos: " + nulo + "%");
        System.out.println("Porcentagem Válidos: " + valido + "%");
    }
}
