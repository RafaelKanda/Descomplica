var nome = "Rafael Kanda";
var x = nome.length;

console.log(x);

resultado = x > 10 ? "Obrigado" : "Prencha o nome completo";

console.log(resultado);

var res = nome.toUpperCase();
console.log(res);

var jogo = "Barcelona vs Real";
var posicao = jogo.indexOf("Real");
console.log(posicao);

var cortado = jogo.slice(0, 9);
console.log(cortado);

var cortado2 = jogo.slice(13);
console.log(cortado2);

var val = jogo.includes("Real");
console.log(val);

var str1 = "Hello";
var str2 = " World!";

var str3 = str1.concat(str2);
console.log(str3);

var frase = "      Oi, tudo bem?";
console.log(frase);
console.log(frase.trim());

var num = "1, 2, 3, 4";
var arr = num.split(",");
console.log(arr);
