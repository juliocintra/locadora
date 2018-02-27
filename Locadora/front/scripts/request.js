function ping() {

}

function login() {
    var usuario = document.getElementById("username").value;
    var senha = document.getElementById("password").value;

    var params = JSON.stringify({"username": usuario,"password": senha});

    if (usuario == '' || senha == '')
        alert('preencha todos os campos');
    else {

        var request = new XMLHttpRequest();

        request.open("POST", "https://watchlater.azurewebsites.net/api/login");
        request.setRequestHeader("Content-type", "application/json");
        request.send(params);

        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log('login efetuado com sucesso');
            }
            else if(this.status == 400){
                alert('dados invalidos');
                // console.log(JSON.parse(this.responseText)[0]);
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

    if (senha != confirmaSenha) {
        alert('senhas diferentes');
    }

    var params = JSON.stringify({"username": usuario,"password": senha});

    request.open("POST", "https://watchlater.azurewebsites.net/api/user");
    request.setRequestHeader("Content-type", "application/json");
    request.send(params);

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log('usuario cadastrado');
        }
        else if(this.status == 400){
            alert('deu ruim');
            // console.log(JSON.parse(this.responseText)[0]);
        }
    };

    console.log(usuario + ' ' + senha + ' ' + confirmaSenha);
}