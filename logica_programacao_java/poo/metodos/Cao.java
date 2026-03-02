package logica_programacao_java.poo.metodos;

public class Cao {

    private int idade;

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public int getIdade() {
        return idade;
    }

    public void andar() {
        System.out.println("Estou andando...");
    }

    public boolean verificarIdade() {
        if (idade > 10) {
            return true;
        } else {
            return false;
        }
    }
    
}
