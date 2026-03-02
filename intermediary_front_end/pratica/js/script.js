var valorTotal = [0, 0];
var valorProduto = [50.0, 30.0];
var qtd = [0, 0];

function adicionarItem(item) {
  var quantidade = document.getElementById("quantidade" + item);
  var total = document.getElementById("total" + item);
  qtd[item]++;
  valorTotal[item] = parseFloat(valorProduto[item]) * parseInt(qtd[item]);
  quantidade.innerHTML = qtd[item];
  total.innerHTML = valorTotal[item].toFixed(2);
  valorCompra();
}

function retirarItem(item) {
  if (qtd[item] > 0) {
    var quantidade = document.getElementById("quantidade" + item);
    var total = document.getElementById("total" + item);
    qtd[item]--;
    valorTotal[item] = parseFloat(valorProduto[item]) * parseInt(qtd[item]);
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    valorCompra();
  }
}

function valorCompra() {
  var valorTotalCompra = document.getElementById("valorTotalCompra");
  var total = valorTotal.reduce((total, valor) => (total += valor), 0);
  valorTotalCompra.innerHTML = total.toFixed(2);
}
