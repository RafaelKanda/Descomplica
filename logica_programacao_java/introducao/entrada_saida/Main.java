package logica_programacao_java.introducao.entrada_saida;

import java.util.Scanner;

public class Main {
    
    public static void main(String[] args) {

        System.out.println("Olá mundo!");
        System.out.println("Informe seu nome");

        String palavra;
        Scanner entrada = new Scanner(System.in);

        palavra = entrada.next();

        System.out.println("Nome: " + palavra);

        entrada.close();

    }
}
