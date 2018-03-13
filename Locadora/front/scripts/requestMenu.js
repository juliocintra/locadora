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

    if (params.watched === "")
        error.push("Peencha todos os campos");

    if (params.watchedDate === "")
        error.push("Peencha todos os campos");

    if (params.quality === "")
        error.push("Peencha todos os campos");

    if (params.description === "")
        error.push("Peencha todos os campos");

    if (error[0] === undefined)
        error[0] = 0;

    return error[0];
}

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
        }
        else {
            console.log('deu ruim');
        }
    }
}

// window.onload = function() {
//     var request = new XMLHttpRequest();
//
//     request.open("GET", "https://watchlater.azurewebsites.net/api/category");
//     request.setRequestHeader("Content-type", "application/json");
//     request.send();
//
//     request.onreadystatechange = function() {
//         if (this.readyState === 4 && this.status === 200) {
//             var lista = JSON.parse(request.responseText);
//             var category = '';
//             lista.forEach(function (item) {
//                 category = category + '<option value="'+item.id+'">'+item.name+'</option>';
//             });
//             console.log(category);
//             document.getElementById("listaFilmes").innerHTML = category;
//         }
//         else {
//             console.log('Deu ruim');
//         }
//     }
// };

function listarFilmes() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://watchlater.azurewebsites.net/api/user/"+localStorage.getItem("idUser")+"/movie");
    request.send();

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var lista = JSON.parse(request.responseText);

            lista.forEach(function (item) {
                console.log(item.idCategory);
            })

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

            lista.forEach(function(item) {
                if (item.idCategory === id) {
                    console.log(item.idCategory);
                }
            })

        } else if (this.status === 400){
            console.log('deu ruim')

        }
    }
}

function listarFilmePorId(id) {

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
                console.log(request.responseText);
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
        idCategory: document.getElementById("categoriaModal").options[document.getElementById("categoriaModal").selectedIndex].value,
        name: document.getElementById("tituloFilme").value,
        urlPoster: document.getElementById("urlPoster").value,
        urlTrailler: document.getElementById("urlTrailler").value,
        watched: document.getElementById("watchedSim").checked ? true : false,
        watchedDate: document.getElementById("dataWatched").value,
        quality: document.getElementById("quality").value,
        description: document.getElementById("description").value
    };

    var data = validate(params);

    if (data.length !== undefined)
        mostrarSnackbar(data, false);
    else {
        var request = new XMLHttpRequest();
        request.open("PUT", "https://watchlater.azurewebsites.net/api/user/"+params.idUser+"/movie/"+id+", true");
        request.setRequestHeader("Content-type", "application/json");
        request.send(JSON.stringify(params));

        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(request.responseText);
                mostrarSnackbar('Filme atualizado com sucesso', true);
            } else if (this.status === 400){
                mostrarSnackbar('Deu ruim', false);
            }
        }
    }
}