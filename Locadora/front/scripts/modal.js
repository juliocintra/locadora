function adicionarFilme() {
    document.getElementById("modal").classList.remove("modal");
    document.getElementById("modal").classList.add("modalOpen");

    document.getElementById("divModal").style.display = "block";
    document.getElementById("fundo").style.display = "block";
    listarCategoriaDropDown(null);
}

function fecharModal() {
    document.getElementById("modal").classList.remove("modalOpen");
    document.getElementById("modal").classList.add("modal");

    document.getElementById("modalEditar").classList.remove("modalOpenEditar");
    document.getElementById("modalEditar").classList.add("modalEditar");

    document.getElementById("modalTrailler").style.display = "none";
    document.getElementById("divModal").style.display = "none";
    document.getElementById("divModalEditar").style.display = "none";
    document.getElementById("fundo").style.display = "none";

    limparCampos();
}

function exibirDetalhes(filme) {
    listarCategoriaDropDown(filme.idCategory);
    document.getElementById('tituloFilmeEditar').value = filme.name;
    document.getElementById('urlPosterEditar').value = filme.urlPoster;
    document.getElementById("posterEditar").style.backgroundImage = "url('"+filme.urlPoster+"')";
    document.getElementById('urlTraillerEditar').value = filme.urlTrailler;
    document.getElementById('displayEditar').value = filme.quality;
    document.getElementById('qualityEditar').value = filme.quality;
    document.getElementById('descriptionEditar').value = filme.description;

    if (filme.watched)
        document.getElementById('watchedSimEditar').checked = true;
    else
        document.getElementById('watchedNaoEditar').checked = true;

    if (filme.watchedDate)
        document.getElementById('dataWatchedEditar').value = filme.watchedDate.substring(0, 10);


    document.getElementById('btnSalvarEditar').value = filme.id;
    document.getElementById('btnDeletarEditar').value = filme.id;

    document.getElementById("modalEditar").classList.remove("modalEditar");
    document.getElementById("modalEditar").classList.add("modalOpenEditar");

    document.getElementById("divModalEditar").style.display = "block";
    document.getElementById("fundo").style.display = "block";
}

function openModalTrailler() {
    document.getElementById("modalTrailler").style.display = "block";
    document.getElementById("fundo").style.display = "block";
}

function limparCampos() {
    document.getElementById("tituloFilme").value = '';
    document.getElementById("urlPoster").value = '';
    document.getElementById("urlTrailler").value = '';
    document.getElementById("description").value = '';
    document.getElementById("dataWatched").value = '';
}