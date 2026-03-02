package logica_programacao_java.vetores_matrizes.matriz;

public class Main {
    
    public static void main(String[] args) {
        int[][] dados = new int[3][3];

        for (int i = 0; i < 3; i++) {
            for( int j = 0; j < 3; j++) {
                dados[i][j] = j;
            }
        }

        System.out.println(dados[2][2]);
    }
}
