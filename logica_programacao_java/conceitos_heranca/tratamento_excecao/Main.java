package logica_programacao_java.conceitos_heranca.tratamento_excecao;

import java.util.Scanner;

public class Main {
    
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        
        try {
            System.out.println("Digite um valor");
            int numero1 = s.nextInt();
            System.out.println(numero1);
        } catch (Exception e) {
            System.out.println("Error - Valor não é um número");
        }
        
        s.close();

    }
}
