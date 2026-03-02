package logica_programacao_java.polimorfismo.sobreescrita;

public class Main {
    public static void main(String[] args) {
        Java j1 = new Java();
        j1.mostrarInformacao();

        Linguagem l1 = new Linguagem();
        l1.mostrarInformacao();

        Python p1 = new Python();
        p1.mostrarInformacao();
    }
}

class Linguagem {

    public void mostrarInformacao() {
        System.out.println("Linguagem");
    }
}

class Java extends Linguagem {
    @Override
    public void mostrarInformacao() {
        System.out.println("Java");
    }
}

class Python extends Linguagem {
    @Override
    public void mostrarInformacao() {
        System.out.println("Python");
    }
}