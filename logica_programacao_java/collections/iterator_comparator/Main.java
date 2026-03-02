package logica_programacao_java.collections.iterator_comparator;

import java.util.ArrayList;
import java.util.Iterator;

public class Main {
    
    public static void main(String[] args) {
        ArrayList<Integer> numeros = new ArrayList<Integer>();
        numeros.add(1);
        numeros.add(3);
        numeros.add(2);

        System.out.println("ArrayList: " + numeros);

        // Criando uma instância de Iterator
        Iterator<Integer> it = numeros.iterator();
        int numero = it.next();
        System.out.println("Elemento: " + numero);

        while (it.hasNext()) {
            it.forEachRemaining((value) -> System.out.println(value + ", "));
        }
    }
}
