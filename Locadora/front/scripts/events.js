function mostrarSnackbar(message, status) {
    var snackBar = document.getElementById("snackbar");
    snackBar.className = "show";
    snackBar.innerHTML = message;
    if (status)
        snackBar.style.backgroundColor = '#09B548';
    else
        snackBar.style.backgroundColor = '#ea4b4b';
    setTimeout(function () {
        snackBar.className = snackBar.className.replace("show", "");

    }, 2000);
}

function theme(body) {

    if (!localStorage.getItem('tema')) {
        console.log('aaa');
        localStorage.setItem('tema', body)
    }
    else {
        if (localStorage.getItem('tema') === 'whiteTheme') {
            document.getElementsByTagName("BODY")[0].classList.remove("bodyDark");
            document.getElementsByTagName("BODY")[0].classList.add("whiteTheme");
            document.getElementById("listaFilmes").style.backgroundColor = "white";
            localStorage.setItem('tema', 'whiteTheme');
        }
        else {
            document.getElementsByTagName("BODY")[0].classList.remove("whiteTheme");
            document.getElementsByTagName("BODY")[0].classList.add("bodyDark");
            document.getElementById("listaFilmes").style.backgroundColor = "#2b2b2b";
            localStorage.setItem('tema', 'bodyDark');
        }
    }
}

function darkTheme() {
    if (localStorage.getItem('tema') === 'bodyDark') {
        document.getElementsByTagName("BODY")[0].classList.remove("bodyDark");
        document.getElementsByTagName("BODY")[0].classList.add("whiteTheme");
        document.getElementById("listaFilmes").style.backgroundColor = "white";
        localStorage.setItem('tema', 'whiteTheme');
    }
    else {
        document.getElementsByTagName("BODY")[0].classList.remove("whiteTheme");
        document.getElementsByTagName("BODY")[0].classList.add("bodyDark");
        document.getElementById("listaFilmes").style.backgroundColor = "#2b2b2b";
        localStorage.setItem('tema', 'bodyDark');
    }
}

function validaUser(btn) {
    console.log(btn.value);
}

