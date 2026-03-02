package logica_programacao_java.conceitos_heranca.classe_abstrata;

public class Main {
    
    public static void main(String[] args) {
        Conta cp = new Poupanca();
        cp.setSaldo(5000);
        cp.imprimeExtrato();
    }
}
