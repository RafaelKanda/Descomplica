// Uso if

let pais = "Brasil";

if (pais != "Brasil") {
  console.log("Você é estrangeiro");
} else {
  console.log("Você é brasileiro");
}

let idade = 22;

if (idade < 16) {
  console.log("Nao vota");
} else if (idade < 18 || idade > 65) {
  console.log("Voto opcional");
} else {
  console.log("Voto obrigatório");
}

// Uso switch

let diaSem = 5;

switch (diaSem) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
  case 4:
    console.log("Quarta");
    break;
  case 5:
    console.log("Quinta");
    break;
  case 6:
    console.log("Sexta");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Esse dia da semana não existe!");
    break;
}

// Uso for

var carro = { modelo: "Audi A3", marca: "Audi", ano: 2020 };
var carros = [
  { modelo: "Audi A3", marca: "Audi", ano: 2020 },
  { modelo: "Compass", marca: "Jeep", ano: 2021 },
];

for (let caracteristica in carro) {
  console.log(carro[caracteristica]);
}

for (let car of carros) {
  console.log(car.marca);
}

// Uso while

let c = 1;
while (c <= 10) {
  console.log(c);
  c++;
}

var t = 1;

do {
  console.log(t);
  t++;
} while (t == 2);
