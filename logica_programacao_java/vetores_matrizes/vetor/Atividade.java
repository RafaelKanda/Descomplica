package logica_programacao_java.vetores_matrizes.vetor;

public class Atividade {
    
    public static void main(String[] args) {
        
        int[] passarosPorDia = {2,5,0,7,4,1,3,0,2,5,0,1,3,1};

        int totalPassaros = 0;
        int passarosPrimeira = 0;
        int passarosSegunda = 0;
        
        for (int i = 0; i < passarosPorDia.length; i++) {
            totalPassaros += passarosPorDia[i];
            if (i < 7) {
                passarosPrimeira += passarosPorDia[i];
            } else {
                passarosSegunda += passarosPorDia[i];
            }
        }

        System.out.println("Total: " + totalPassaros);
        System.out.println("Semana 1: " + passarosPrimeira);
        System.out.println("Semana 2: " + passarosSegunda);
    }
}
