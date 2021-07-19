function removerHost(anchor) {
  var linha = anchor.closest("tr");
  linha.remove();
}


var form = document.getElementById("formNovoHost");
var btnAdd = document.getElementById("btnNovoHost");
var btnFechar = document.getElementsByClassName("close")[0];

btnAdd.onclick = function () {
    form.style.display = "block";
};

btnFechar.onclick = function () {
    form.style.display = "none";
};

