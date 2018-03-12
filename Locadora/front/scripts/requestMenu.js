function listarCategoriaDropDown() {
    var request = new XMLHttpRequest();

    request.open("GET", "https://watchlater.azurewebsites.net/api/category");
    request.setRequestHeader("Content-type", "application/json");
    request.send();

    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var lista = JSON.parse(request.responseText);
            var category = '';
            lista.forEach(function (item) {
                category = category + '<option value="'+item.id+'">'+item.name+'</option>';
            });

            document.getElementById("categoriaModal").innerHTML = category;
            // console.log(category);
        }
        else {
            console.log('deu ruim');
        }
    }
}

function inserirFilme() {
    var params = {
        idUser: localStorage.getItem("idUser"),
        idCategory: document.getElementById("categoriaModal").options[document.getElementById("categoriaModal").selectedIndex].value,
        name: document.getElementById("tituloFilme").value,
        urlPoster: document.getElementById("urlPoster").value,
        urlTrailler: document.getElementById("urlTrailler").value,
        watched: document.getElementById("watchedSim").checked ? true : false,
        watchedDate: document.getElementById("dataWatched").value,
        quality: document.getElementById("quality").value,
        description: document.getElementById("description").value
    };


    var request = new XMLHttpRequest();
    request.open("POST", "https://watchlater.azurewebsites.net/api/user/"+params.idUser+"/movie", true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(params));

    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log('foi');
            console.log(request.responseText);
            mostrarSnackbar('Filme cadastrado com sucesso', true);
        } else {
            console.log('nao foi');
            mostrarSnackbar('Deu ruim', false);
        }
    }

}