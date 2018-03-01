function mostrarSnackbar(message) {
    var snackBar = document.getElementById("snackbar");
    snackBar.className = "show";
    snackBar.innerHTML = message;

    setTimeout(function(){
        snackBar.className = snackBar.className.replace("show", "");
        }, 1500);
}

function login() {
    var usuario = document.getElementById("username").value;
    var senha = document.getElementById("password").value;

    var params = JSON.stringify({"username": usuario,"password": senha});

    if (usuario == '' || senha == '') {
        mostrarSnackbar('Preencha todos os campos!');
    }
    else {

        var request = new XMLHttpRequest();

        request.open("POST", "https://watchlater.azurewebsites.net/api/login");
        request.setRequestHeader("Content-type", "application/json");
        request.send(params);

        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                mostrarSnackbar('Login efetuado!');
            }
            else if(this.status == 400){
                if (request.responseText) {
                    var message = JSON.parse(request.responseText);
                }
                mostrarSnackbar(message);
            }
        }
    }
}

function cadastrar() {

    var usuario = document.getElementById("usernameCad").value;
    var senha = document.getElementById("passwordCad").value;
    var confirmaSenha = document.getElementById("confirmPassword").value;

    if (usuario == '' || senha == '' || confirmaSenha == '')
        mostrarSnackbar('Preencha todos os campos');
    else if (senha != confirmaSenha) {
        mostrarSnackbar('As senhas informadas são diferentes');
    }
    else {

        var params = JSON.stringify({"username": usuario,"password": senha});

        var request = new XMLHttpRequest();

        request.open("POST", "https://watchlater.azurewebsites.net/api/user");
        request.setRequestHeader("Content-type", "application/json");
        request.send(params);

        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                mostrarSnackbar('Cadastro efetuado com sucesso!!');
            }
            else if(this.status == 400){
                if (request.responseText) {
                    var message = JSON.parse(request.responseText);
                }
                mostrarSnackbar(message[0]);
                setTimeout(function() {
                    voltar();
                }, 1500)
            }
        };
    }

}