function removerRelatorio(anchor) {
  var linha = anchor.closest("tr");
  linha.remove();
}

function addRelatorio() {
  //Fecha a dialog
  form.style.display = "none";

  //Pega valores do form
  var nomeRelatorio = document.getElementById("iptNomeRelatorio").value;
  var nomeHost = document.getElementById("selHost").value;

  //Gerar Data
  const date = new Date();
  var mes = date.getMonth() + 1;

  //Copiar botao de opcoes
  var btnOpcoes = document.getElementById("btnOption");
  var btnClone = btnOpcoes.cloneNode(true);

  //Pega a tabela e adiciona a linha e colunas
  var tabela = document.getElementById("tableRelatorios");
  var linha = tabela.insertRow(1);
  var nomeCol = linha.insertCell(0);
  var nomeHostCol = linha.insertCell(1);
  var statusCol = linha.insertCell(2);
  var modCol = linha.insertCell(3);
  var optCol = linha.insertCell(4);

  //Insere Informações
  nomeCol.innerHTML = nomeRelatorio;
  nomeHostCol.innerHTML = nomeHost;
  statusCol.innerHTML = "Aguardando Geração";
  modCol.innerHTML = date.getFullYear() + "/" + mes + "/" + date.getDate();
  optCol.appendChild(btnClone);

  document.getElementById("formValuesRelatorio").reset();
  return false;
}

var form = document.getElementById("formNovoRelatorio");
var btnAdd = document.getElementById("btnNovoRelatorio");
var btnFechar = document.getElementsByClassName("close")[0];

btnAdd.onclick = function () {
  form.style.display = "flex";
  form.style.alignItems = "center";
  form.style.justifyContent = "center";
};

btnFechar.onclick = function () {
  form.style.display = "none";
  document.getElementById("formValuesRelatorio").reset();
};
