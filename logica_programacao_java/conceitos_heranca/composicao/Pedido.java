package logica_programacao_java.conceitos_heranca.composicao;

public class Pedido {
    private Itens i;

    public Pedido() {
        i = new Itens();
        System.out.println(i);
    }
}
