package logica_programacao_java.conceitos_heranca.classe_abstrata;

public class Poupanca extends Conta {

    public void imprimeExtrato() {
        System.out.println("Saldo: " + this.getSaldo() );
    }
    
}
