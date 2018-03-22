function mostrarSnackbar(message, status) {
    var snackBar = document.getElementById("snackbar");
    snackBar.className = "show";
    snackBar.innerHTML = message;
    if (status)
        snackBar.style.backgroundColor = '#09B548';
    else
        snackBar.style.backgroundColor = '#ea4b4b';
    setTimeout(function(){
        snackBar.className = snackBar.className.replace("show", "");

    }, 1500);
}

function darkTheme() {
    var body = document.getElementById("body").className;

    if (body === 'bodyDark'){
        document.getElementsByTagName("BODY")[0].classList.remove("bodyDark");
        document.getElementById("listaFilmes").style.backgroundColor = "rgb(221, 221, 221)";
    }
    else {
        document.getElementsByTagName("BODY")[0].classList.add("bodyDark");
        document.getElementById("listaFilmes").style.backgroundColor = "#2b2b2b";
    }

    var teste = document.getElementById("listaFilmes").childNodes;
    teste.forEach(function(item) {
        document.getElementById(item.id.toString()).style.backgroundColor = "red";
    })

}

function validaUser(btn) {
   console.log(btn.value);
   // var regex = /^[a-z0-9_-]/;
   // if (btn.value == regex) {
   //    alert('FRACA');
   // }
}

