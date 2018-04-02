function login() {
    var usuario = document.getElementById("username").value;
    var senha = document.getElementById("password").value;

    var params = JSON.stringify({"username": usuario,"password": senha});

    if (usuario == '' || senha == '') {
        mostrarSnackbar('Inform the username and password', false);
    }
    else {

        var request = new XMLHttpRequest();

        request.open("POST", "https://watchlater.azurewebsites.net/api/login");
        request.setRequestHeader("Content-type", "application/json");
        request.send(params);

        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                localStorage.setItem("idUser", JSON.parse(request.responseText));
                setTimeout(function() {
                    location.href = "inicio.html";
                }, 1500);
            }
            else if(this.status == 400){
                if (request.responseText) {
                    var message = JSON.parse(request.responseText);
                }
                mostrarSnackbar(message, false);
            }
        }
    }
}

function cadastrar() {

    var usuario = document.getElementById("usernameCad").value;
    var senha = document.getElementById("passwordCad").value;
    var confirmaSenha = document.getElementById("confirmPassword").value;

    if (usuario.length < 8 || usuario.length > 16)
        mostrarSnackbar('Username must be 8 to 16 characters', false);
    else if (usuario === '' || senha === '' || confirmaSenha === '')
        mostrarSnackbar('Preencha todos os campos', false);
    else if (senha !== confirmaSenha) {
        mostrarSnackbar('Passwords are diferents!', false);
    }
    else {

        var params = JSON.stringify({"username": usuario,"password": senha});

        var request = new XMLHttpRequest();

        request.open("POST", "https://watchlater.azurewebsites.net/api/user");
        request.setRequestHeader("Content-type", "application/json");
        request.send(params);

        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                mostrarSnackbar('Success', true);
                setTimeout(function() {
                    voltar();
                }, 1500)
            }
            else if(this.status == 400){
                if (request.responseText) {
                    var message = JSON.parse(request.responseText);
                }
                mostrarSnackbar(message[0], false);
            }
        };
    }
}