function validate(params) {
    var error = [];

    if (params.idUser === "")
        error.push("Peencha todos os campos");

    if (params.idCategory === "")
        error.push("Peencha todos os campos");

    if (params.name === "")
        error.push("Peencha todos os campos");

    if (params.urlPoster === "")
        error.push("Peencha todos os campos");

    if (params.urlTrailler === "")
        error.push("Peencha todos os campos");

    // if (params.watched === "")
    //     error.push("Peencha todos os campos");
    //
    // if (params.watchedDate === "")
    //     error.push("Peencha todos os campos");
    //
    // if (params.quality === "")
    //     error.push("Peencha todos os campos");
    //
    // if (params.description === "")
    //     error.push("Peencha todos os campos");

    if (error[0] === undefined)
        error[0] = 0;

    return error[0];
}

function listarCategoriaDropDown(idCategory) {
    var request = new XMLHttpRequest();

    request.open("GET", "https://watchlater.azurewebsites.net/api/category");
    request.setRequestHeader("Content-type", "application/json");
    request.send();

    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var lista = JSON.parse(request.responseText);
            var category = '';

            if (idCategory === null) {
                lista.forEach(function (item) {
                    category = category + '<option value="'+item.id+'">'+item.name+'</option>';
                });
                document.getElementById("categoriaModal").innerHTML = category;
            }
            else {
                lista.forEach(function(item) {
                    if (item.id === idCategory) {
                        category = category + '<option selected="selected" value="'+item.id+'">'+item.name+'</option>';
                    }
                    else {
                        category = category + '<option value="'+item.id+'">'+item.name+'</option>';
                    }
                });
                document.getElementById("categoriaModalEditar").innerHTML = category;
            }
        }
        else {
            console.log('deu ruim');
        }
    }
}

function listarFilmes() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://watchlater.azurewebsites.net/api/user/"+localStorage.getItem("idUser")+"/movie");
    request.send();

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var lista = JSON.parse(request.responseText);

            if (lista.length) {
                var divFilme = "";

                lista.forEach(function (item) {
                    divFilme = divFilme + "<div name=\"filmes\" class=\"conteudoFilme\" style=\"background: url("+item.urlPoster+"); background-size: 210px;\"><div class=\"detalhes\"><i class=\"material-icons\" id="+item.id+" onclick=\"trailler(this.id)\">play_circle_outline</i><button id="+item.id+"  class=\"info\" onclick=\"listarFilmePorId(this.id)\">Detalhes</button><button id="+item.id+" class=\"trailer\" onclick=\"trailler(this.id)\">Trailer</button></div></div>";
                });

                document.getElementById("noMovies").style.display = "none";
                document.getElementById("filmes").innerHTML = divFilme;
            }
            else {
                document.getElementById("filmes").innerHTML = "";
                document.getElementById("noMovies").style.display = "block";
            }
        } else if (this.status === 400){
            console.log('deu ruim')

        }
    }
}

function listarFilmesPorCategoria(id) {
    var request = new XMLHttpRequest();
    request.open("GET", "https://watchlater.azurewebsites.net/api/user/"+localStorage.getItem("idUser")+"/movie");
    request.send();

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var lista = JSON.parse(request.responseText);

            if (lista.length) {
                var divFilme = "";

                lista.forEach(function(item) {
                    if (item.idCategory === id) {
                        divFilme = divFilme + "<div name=\"filmes\" class=\"conteudoFilme\" style=\"background: url("+item.urlPoster+"); background-size: 210px;\"><div class=\"detalhes\"><i class=\"material-icons\" id="+item.id+" onclick=\"trailler(this.id)\">play_circle_outline</i><button id="+item.id+"  class=\"info\" onclick=\"listarFilmePorId(this.id)\">Detalhes</button><button id="+item.id+" class=\"trailer\" onclick=\"trailler(this.id)\">Trailer</button></div></div>";
                    }
                });

                if (divFilme) {
                    document.getElementById("noMovies").style.display = "none";
                    document.getElementById("filmes").innerHTML = divFilme;
                }
                else {
                    document.getElementById("filmes").innerHTML = "";
                    document.getElementById("noMovies").style.display = "block";
                }
            }
        } else if (this.status === 400){
            console.log('deu ruim')
        }
    }
}

function listarFilmePorId(id) {
    var request = new XMLHttpRequest();
    request.open("GET", "https://watchlater.azurewebsites.net/api/user/"+localStorage.getItem("idUser")+"/movie", true);
    request.send();

    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            var lista = JSON.parse(request.responseText);

            lista.forEach(function(item) {
                if (item.id == id) {
                    exibirDetalhes(item);
                }
                else {
                    console.log('nao foi');
                }
            })
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
    console.log(params);
    var data = validate(params);

    if (data.length !== undefined)
        mostrarSnackbar(data, false);
    else {
        var request = new XMLHttpRequest();
        request.open("POST", "https://watchlater.azurewebsites.net/api/user/"+params.idUser+"/movie", true);
        request.setRequestHeader("Content-type", "application/json");
        request.send(JSON.stringify(params));

        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                fecharModal();
                listarFilmes();
                mostrarSnackbar('Filme cadastrado com sucesso', true);
            } else if (this.status === 400){
                mostrarSnackbar('Deu ruim', false);
            }
        }
    }
}

function alterarFilme(id) {

    var params = {
        idUser: localStorage.getItem("idUser"),
        idCategory: document.getElementById("categoriaModalEditar").options[document.getElementById("categoriaModalEditar").selectedIndex].value,
        name: document.getElementById("tituloFilmeEditar").value,
        urlPoster: document.getElementById("urlPosterEditar").value,
        urlTrailler: document.getElementById("urlTraillerEditar").value,
        watched: document.getElementById("watchedSimEditar").checked ? true : false,
        watchedDate: document.getElementById("dataWatchedEditar").value,
        quality: document.getElementById("qualityEditar").value,
        description: document.getElementById("descriptionEditar").value
    };

    var data = validate(params);

    if (data.length !== undefined)
        mostrarSnackbar(data, false);
    else {
        var request = new XMLHttpRequest();
        request.open("PUT", "https://watchlater.azurewebsites.net/api/user/"+params.idUser+"/movie/"+id+"", true);
        request.setRequestHeader("Content-type", "application/json");
        request.send(JSON.stringify(params));

        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                fecharModal();
                listarFilmes();
                mostrarSnackbar('Filme atualizado com sucesso', true);
            } else if (this.status === 400){
                mostrarSnackbar('Deu ruim', false);
            }
        }
    }
}

function excluirFilme(id) {
    var idUser = localStorage.getItem("idUser");
    var request = new XMLHttpRequest();
    request.open("DELETE", "https://watchlater.azurewebsites.net/api/user/"+idUser+"/movie/"+id+"", true);
    request.send();

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            fecharModal();
            listarFilmes();
            mostrarSnackbar('Filme excluído com sucesso', true);
        } else if (this.status === 400){
            mostrarSnackbar('Deu ruim', false);
        }
    }
}

function trailler(id) {
    var request = new XMLHttpRequest();
    request.open("GET", "https://watchlater.azurewebsites.net/api/user/"+localStorage.getItem("idUser")+"/movie", true);
    request.send();

    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            var lista = JSON.parse(request.responseText);
            console.log(lista);
            console.log(id);
            lista.forEach(function(item) {
                if (item.id == id) {
                    var urlTrailler = 'https://www.youtube.com/embed/' + item.urlTrailler.substring(32);
                    document.getElementById("urlTraillerModal").src = urlTrailler;
                    openModalTrailler();
                }
            });
        }
        else {
            console.log('deu ruim: trailler' );
        }
    }
}

function deslogar() {
    window.localStorage.removeItem("idUser");
    setTimeout(function() {
        location.href = "login.html";
    }, 1500)
}