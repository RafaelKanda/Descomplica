package logica_programacao_java.collections.projeto_listas;

import java.util.ArrayList;

public class Main {
    
    public static void main(String[] args) {
        ArrayList<String> linguagens = new ArrayList<>();

        linguagens.add("Java");
        linguagens.add("C#");
        linguagens.add("Python");
        linguagens.add("JavaScript");

        System.out.println("ArrayList: " + linguagens);

        String[] arr = new String[linguagens.size()];
        linguagens.toArray(arr);
        System.out.println("Array: ");

        for (String item:arr) {
            System.out.println(item + ", ");
        }
    }
}
