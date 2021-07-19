function removerHost(anchor) {
    var linha = anchor.closest('tr');
    linha.remove();
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
};