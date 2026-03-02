package logica_programacao_java.conceitos_heranca.interface_;

public class Main {
    public static void main(String[] args) {
        Conta cp = new Poupanca();
        cp.depositar(721);
        cp.sacar(15);
        cp.getSaldo();
    }
}
