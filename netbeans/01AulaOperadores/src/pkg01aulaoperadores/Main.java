package pkg01aulaoperadores;

public class Main {
    public static void main(String[] args) {
        // ARITMÉTICOS
        int a = 10 + 1;
        int b = a - 10;
        int c = b * 3;
        int d = c / 2;
        double e = 4.5 + 1.7;
        
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
        System.out.println(d);
        System.out.println(e);
        
        String mostrarA = "O valor A: " + a;
        System.out.println(mostrarA);
        System.out.println("O valor A: " + a);
        
        a += 10;
        b -= 1;
        c *= 5;
        d /= 1;
        
        System.out.println("O valor A: " + a);
        System.out.println("O valor B: " + b);
        System.out.println("O valor C: " + c);
        System.out.println("O valor D: " + d);
        
        //---------------------------/
        // LÓGICOS
        
        boolean ehMaior = a > 2;
        boolean ehMenor = 10 < 20;
        boolean ehMenorIgual = 10 <= 20;
        boolean ehMaiorIgual = 10 >= 20;
        boolean ehIgual = 10 == 10;
        boolean ehDiferente = 10 != 20;
        
        System.out.println("Maior: " + ehMaior);
        System.out.println("Menor: " + ehMenor);
        System.out.println("Menor Igual: " + ehMenorIgual);
        System.out.println("Maior Igual: " + ehMaiorIgual);
        System.out.println("Igual: " + ehIgual);
        System.out.println("Diferente: " + ehDiferente);
        
        System.out.println(10 > 20);
        if(ehMaior){
            // VARIOS CÓDIGOS
        }
        
        //---------------------------/
        //LÓGICOS
        
        boolean valor = (10 > 9) && (5 > 1);
        boolean valor1 = true && true;
        boolean valor2 = true && false;
        boolean valor3 = false || true;
        boolean valor4 = false || false;
        boolean valor5 = (10 > 9) || (5 > 1);
        
    }
}
