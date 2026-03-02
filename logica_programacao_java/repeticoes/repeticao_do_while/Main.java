package logica_programacao_java.repeticoes.repeticao_do_while;

import java.util.Scanner;

public class Main {
    
    public static void main(String[] args) {
        int opcao;
        Scanner entrada = new Scanner(System.in);

        do {
            System.out.println("Digite um valor ou 99 para sair!");
            opcao = entrada.nextInt();
        } while (opcao != 99);
        
        entrada.close();
    }
    
}
