package aulaoperadoresexer.pkg1;

import java.util.Scanner;

public class AulaOperadoresExer005 {
    
    public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);
        
        System.out.println("Quantos °C? ");
        double c = leia.nextDouble();
        
        double f = (c * 9/5) + 32;
        double k = c + 273.15;
        
        System.out.println(c + "°C é igual a " + f + "°F e " + k + "°K.");
        
    }
}
