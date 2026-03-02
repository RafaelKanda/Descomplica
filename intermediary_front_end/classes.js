class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log("Olá " + this.nome);
  }

  get nomeCompleto() {
    console.log("Olá " + this.nome + " " + this.sobrenome);
  }
}

p1 = new Pessoa("Fábio", "Silva");
p1.falar();

p1.nomeCompleto;

// Herança

class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log("Já está ligado");
    } else {
      this.ligado = true;
    }
  }
}

class SmartPhone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

var s1 = new SmartPhone("Samsung", "Preto", "A71");
console.log(s1);
s1.ligar();
s1.ligar();
