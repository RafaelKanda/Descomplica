package logica_programacao_java.collections.treeset;

import java.util.TreeSet;

public class Main {
    
    public static void main(String[] args) {
        TreeSet<Integer> numeros = new TreeSet<>();

        numeros.add(5);
        numeros.add(2);
        numeros.add(7);
        
        System.out.println("TreeSet: " + numeros);

        boolean result = numeros.remove(2);
        System.out.println("Removeu: " + result);

        result = numeros.removeAll(numeros);
        System.out.println("TreeSet: " + numeros);
    
    }

}
