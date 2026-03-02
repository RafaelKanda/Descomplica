package logica_programacao_java.polimorfismo.to_string;

public class Main {
    public static void main(String[] args) {
        String primeira = "Java";
        String segunda = "C#";
        String terceira = new String("Python");

        System.out.println(primeira.toUpperCase());
        System.out.println(segunda.length());
        System.out.println(terceira);

        boolean result = primeira.equals(segunda);
        System.out.println(result);
    }
}

