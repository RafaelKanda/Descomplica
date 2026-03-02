package logica_programacao_java.poo.construtores;

public class Main {
    
    public static void main(String[] args) {
        Cao cachorro = new Cao();
        cachorro.andar();

        Cao dog = new Cao("Bidu", 10);
        System.out.println(dog.nome + " ... " + dog.idade);
    }
}
