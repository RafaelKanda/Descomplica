package logica_programacao_java.condicionais.exemplo_pratico_estruturas;

import java.util.Scanner;
import java.util.Random;

public class Main {
    
    public static void main(String[] args) {
        Random gerador = new Random();
        int x = gerador.nextInt(100);

        Scanner entrada = new Scanner(System.in);
        System.out.println("Adivinhe o número que estou pensando:");
        int numero = entrada.nextInt();

        if (numero == x) {
            System.out.println("Parabéns, você acertou! Pensei no número " + x);
        } else {
            System.out.println("Você errou! Pensei no número " + x);
        }
        
        entrada.close();
    }
}
