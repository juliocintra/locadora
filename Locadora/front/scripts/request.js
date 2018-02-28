function mostrarSnackbar(message) {
    var snackBar = document.getElementById("snackbar");
    snackBar.className = "show";
    snackbar.innerHTML = message;

    setTimeout(function(){
        snackBar.className = snackBar.className.replace("show", "");
        }, 3000);
}

function login() {
    var usuario = document.getElementById("username").value;
    var senha = document.getElementById("password").value;

    var params = JSON.stringify({"username": usuario,"password": senha});

    if (usuario == '' || senha == '')
        mostrarSnackbar('Preencha todos os campos!');
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

    // var username = document.getElementById("username").value;
    // var password = document.getElementById("password").value;
    //
    // if(username.value != '' && password.value != '')
    // {
    //     var ajax = null;
    //     var params = null;
    //
    //     params = JSON.stringify({"username": username,"password": password});
    //
    //     ajax = new XMLHttpRequest();
    //     ajax.open("POST", "https://watchlater.azurewebsites.net/api/login", true);
    //     ajax.setRequestHeader("Content-type", "application/json");
    //     ajax.send(params);
    //
    //     ajax.onreadystatechange = function() {
    //         if (ajax.readyState == 4)
    //         {
    //             if(ajax.status == 200)
    //             {
    //                 var retornoAjax = JSON.parse(ajax.responseText);
    //                 localStorage.setItem("id_usuario", retornoAjax);
    //                 // mostrarSnackbar(1, 'Login efetuado!');
    //                 setTimeout(
    //                     function(){
    //                         fadeOut("cardLogin", 0.8);
    //                         location.href = "home.php";
    //                     }, 1500);
    //             }
    //             else
    //             {
    //                 // mostrarSnackbar(3, 'Dados Inválidos!');
    //             }
    //         }
    //     }
    // }
    // else
    // {
    //     // mostrarSnackbar(2, 'Preencher todos os campos!');
    // }
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
                setTimeout(function() {
                    voltar();
                }, 3000)

            }
            else if(this.status == 400){
                if (request.responseText) {
                    var message = JSON.parse(request.responseText);
                }
                mostrarSnackbar(message);
            }
        };
    }

}