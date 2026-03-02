// 1 - Escrever um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
// Calcular e escrever o valor do novo salário.

let salario = 10000;
let reajuste = 10;

reajuste /= 100;

let novoSalario = salario * (1 + reajuste);

console.log("");
console.log("Novo salário: R$" + novoSalario);

// 2 - Faça um algoritmo que leia um número inteiro e que imprima o seu sucessor e seu antecessor

let numero = 10;

let antecessor = numero - 1;
let sucessor = numero + 1;

console.log("");
console.log("Número: " + numero);
console.log("Antecessor: " + antecessor);
console.log("Sucessor: " + sucessor);

// 3 - O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do
// distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do
// distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica
// de um carro, calcular e escrever o custo final ao consumidor.

let custoFabrica = 40000;
let percentualDistribuidor = 0.28;
let percentualImpostos = 0.45;

let custoTotal =
  custoFabrica + custoFabrica * (percentualImpostos + percentualDistribuidor);

console.log("");
console.log("Custo final: R$" + custoTotal);

// 4 - Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
// Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5.

let nota1 = 5;
let nota2 = 4;
let nota3 = 7;

let notaFinal = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;

console.log("");
console.log("Média final: " + notaFinal);

// 5 - Faça um algoritmo que leia quatro números informados pelo usuário e que depois imprima a média
// ponderada, sabendo-se que os pesos são respectivamente: 1, 2, 3 e 4:

let num1 = 5;
let num2 = 4;
let num3 = 7;
let num4 = 8;

let mediaPonderada = (num1 + num2 * 2 + num3 * 3 + num4 * 4) / 10;

console.log("");
console.log("Média ponderada: " + mediaPonderada);

// 6 - Para fazer uma promoção, os comerciantes estão procurando aumentar suas vendas oferecendo desconto.
// Faça um algoritmo que possa receber um valor de um produto e que escreva o novo valor tendo em vista
// que o desconto foi de 9%.

let valorProduto = 1000;
let desconto = 0.09;

let valorProdutoDesconto = valorProduto * (1 - desconto);

console.log("");
console.log("Produto com desconto: R$" + valorProdutoDesconto);

// 7 - Faça um algoritmo que efetue o cálculo da quantidade de litros de combustível gastos em uma viagem,
// sabendo-se que o carro faz 12 Km com um litro. Deverão ser fornecidos o tempo gasto na viagem e a velocidade
// média. Utilizar as seguintes fórmulas: d = t * v | litros = d / 12 . O algoritmo deverá apresentar os
// valores da velocidade média, tempo gasto na viagem, distância percorrida e a quantidade de litros utilizadas
// na viagem.

let tempo = 3;
let velocidadeMedia = 80;

let distancia = velocidadeMedia * tempo;
let litros = distancia / 12;

console.log("");
console.log("Velocidade média: " + velocidadeMedia + " Km/h");
console.log("Tempo gasto: " + tempo + " horas");
console.log("Distância percorrida: " + distancia + " Km");
console.log("Consumo: " + litros + " litros");
