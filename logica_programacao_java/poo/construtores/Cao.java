package logica_programacao_java.poo.construtores;

public class Cao {
    
    String nome;
    String cor;
    int idade;
    double peso;

    public Cao() {
        cor = "Azul";
    }
    
    public Cao(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    public void andar() {
        System.out.println("Andando ... " + cor);
    }
}
