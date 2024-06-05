package aulaoperadoresexer.pkg1;

public class ExerExtra {
    
    public static void main(String[] args) {
        int A = 10;
        int B = 20;
        
        int C = B;
        B = A;
        A = C;
        
        System.out.println("Valor de A: " + A);
        System.out.println("Valor de B: " + B);
    }
}
