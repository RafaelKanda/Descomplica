package logica_programacao_java.conceitos_heranca.heranca_exemplo;

public class Animal {
    
    private String nome;

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void comer() {
        System.out.println("Eu gosto de comer");
    }
}
