function adicionarFilme() {
    // document.getElementById("modal").style.display = 'inline';
    document.getElementById("modal").classList.remove("modal");
    document.getElementById("modal").classList.add("modalOpen");
}

function fecharModal() {
    document.getElementById("modal").classList.remove("modalOpen");
    document.getElementById("modal").classList.add("modal");
}