function adicionarFilme() {
    document.getElementById("modal").classList.remove("modal");
    document.getElementById("modal").classList.add("modalOpen");

    listarCategoriaDropDown();
}

function fecharModal() {
    document.getElementById("modal").classList.remove("modalOpen");
    document.getElementById("modal").classList.add("modal");
}