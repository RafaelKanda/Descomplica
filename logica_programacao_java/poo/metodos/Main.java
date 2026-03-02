package logica_programacao_java.poo.metodos;

public class Main {
    
    public static void main(String[] args) {
        Cao cachorro = new Cao();
        cachorro.setIdade(5);
        if( cachorro.verificarIdade()) {
            System.out.println("É idoso");
        } else {
            System.out.println("É novo");
        }
    }
}
