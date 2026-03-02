package logica_programacao_java.conceitos_heranca.classe_abstrata;

abstract class Conta {
    
    private double saldo;

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public double getSaldo() {
        return saldo;
    }

    public abstract void imprimeExtrato();
}
