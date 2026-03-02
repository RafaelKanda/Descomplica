package logica_programacao_java.condicionais.condicional_aninhada;

public class Main {
    
    public static void main(String[] args) {
        int nota = 3;

        if (nota >= 5) {
            System.out.println("Aprovado");
        } else if (nota >= 3) {
            System.out.println("Recuperação");
        } else {
            System.out.println("Reprovado");
        }
    }
}
