package logica_programacao_java.vetores_matrizes.list_arraylist;

import java.util.ArrayList;

public class Main {
    
    public static void main(String[] args) {
        ArrayList<String> estados = new ArrayList<>();
        
        estados.add("Espírito Santos");
        estados.add("Amazonas");
        estados.add("Sergipe");
        estados.add("Recife");

        estados.remove("Sergipe");

        estados.contains("Amapá");

        System.out.println(estados);

    }
}
