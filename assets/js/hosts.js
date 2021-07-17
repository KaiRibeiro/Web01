function removerHost(anchor) {
    var linha = anchor.closest('tr');
    linha.parentNode.removeChild(linha);
}
