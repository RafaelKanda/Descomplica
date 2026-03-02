// Filter

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var even = numeros.filter((item) => item % 2 === 0);
console.log(even);

function buscarValores(valor) {
  return valor > 5;
}
var greatherThanFive = numeros.filter(buscarValores);
console.log(greatherThanFive);

var funcionarios = [
  { nome: "Luiz", idade: 62 },
  { nome: "Davi", idade: 22 },
  { nome: "Arthur", idade: 18 },
  { nome: "Lucas", idade: 40 },
];

var pessoasListagem = funcionarios.filter(function (valor) {
  return valor.nome.length < 5;
});

console.log(pessoasListagem);

// Map

var num = numeros.map(function (valor) {
  return valor * 2;
});
console.log(num);

var nomes = funcionarios.map((pessoa) => pessoa.nome);
console.log(nomes);

var tot = numeros.reduce(function (total, numero) {
  return total + numero;
}, 0);
console.log(tot);

// For-Each

var a = [10, 20, 30, 40, 50, 60];

for (let valor of a) {
  console.log(valor);
}

a.forEach((valor) => console.log(valor));

var total = 0;
a.forEach((valor) => (total += valor));
console.log(total);
