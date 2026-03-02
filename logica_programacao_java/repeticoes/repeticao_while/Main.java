package logica_programacao_java.repeticoes.repeticao_while;

import java.util.Scanner;

public class Main {
    
    public static void main(String[] args) {
        int opcao = 0;
        Scanner entrada = new Scanner(System.in);
        
        while (opcao != 99) {
            System.out.println("Digite um valor qualquer ou 99 para sair!");
            opcao = entrada.nextInt();
        }

        entrada.close();

    }
}
