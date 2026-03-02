// Funções e Objetos

var pessoa = {
  nome: "Luiz",
  sobrenome: "Otávio",
};

console.log(pessoa["sobrenome"]);

var pessoa1 = new Object();
pessoa1.nome = "Angela";
pessoa1.sobrenome = "Silva";
pessoa1.falarNome = function () {
  console.log("Nome é: " + this.nome);
};

console.log(pessoa1.sobrenome);

pessoa1.falarNome();

function criarPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}

var p1 = criarPessoa("Lucas", "Silva");
var p2 = criarPessoa("Arthur", "Almeida");

console.log(p1);

function multiplicar(a, b) {
  return a * b;
}

var x = multiplicar(3, 2);
console.log(x);
