function adicionarFilme() {
    document.getElementById("modal").classList.remove("modal");
    document.getElementById("modal").classList.add("modalOpen");

    document.getElementById("fundo").style.display = "block";

    listarCategoriaDropDown();
}

function fecharModal() {
    document.getElementById("modal").classList.remove("modalOpen");
    document.getElementById("modal").classList.add("modal");

    document.getElementById("fundo").style.display = "none";
}

function exibirDetalhes() {
    document.getElementById("modalEditar").classList.remove("modalEditar");
    document.getElementById("modalEditar").classList.add("modalOpenEditar");

    document.getElementById("fundo").style.display = "block";
}