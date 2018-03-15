function redirect() {
    document.getElementById("login").style.transform = "rotate3d(0, 1, 0, 90deg)";
    setTimeout(function () {
        document.getElementById("cadastrar").style.transform = "rotate3d(0, 1, 0, 0deg)";
    }, 500)
}

function voltar() {

    document.getElementById("cadastrar").style.transform = "rotate3d(0, 1, 0, 90deg)";
    setTimeout(function () {
        document.getElementById("login").style.transform = "rotate3d(0, 1, 0, 0deg)";
    }, 500)
    ;
}

function myOnfocus(item) {
    item.style.borderColor = '#37C7F3';
}

function myOnblur(item) {
    item.style.borderColor = '';
}

function transitionMenu() {

    var menu = document.getElementById("divVertical").className;

    if (menu === 'divVertical') {
        document.getElementById("divVertical").classList.remove("divVertical");
        document.getElementById("divVertical").classList.add("expandirDivVertical");

        document.getElementById("barra1").classList.remove("barra1");
        document.getElementById("barra1").classList.add("rotateBarra1");

        document.getElementById("barra3").classList.remove("barra3");
        document.getElementById("barra3").classList.add("rotateBarra3");

        document.getElementById("barra2").classList.remove("barra2");
        document.getElementById("barra2").classList.add("hiddenBarra2");

        // document.getElementById("barra2").style.transform = "rotate(-45deg)"

        // document.getElementById("menu").classList.remove("menu");
        // document.getElementById("menu").classList.add("expandirMenu");
        //
        // document.getElementById("longBarVertical").classList.remove("longBarVertical");
        // document.getElementById("longBarVertical").classList.add("expandirLongBarVertical");
    }
    else {
        document.getElementById("divVertical").classList.remove("expandirDivVertical");
        document.getElementById("divVertical").classList.add("divVertical");

        document.getElementById("barra1").classList.remove("rotateBarra1");
        document.getElementById("barra1").classList.add("barra1");

        document.getElementById("barra3").classList.remove("rotateBarra3");
        document.getElementById("barra3").classList.add("barra3");

        document.getElementById("barra2").classList.remove("hiddenBarra2");
        document.getElementById("barra2").classList.add("barra2");

        // document.getElementById("menu").classList.remove("expandirMenu");
        // document.getElementById("menu").classList.add("menu");
        //
        // document.getElementById("longBarVertical").classList.remove("expandirLongBarVertical");
        // document.getElementById("longBarVertical").classList.add("longBarVertical");
    }

}

function miniPosterEditar(urlPoster) {
    document.getElementById("poster").style.backgroundImage = "url('"+urlPoster+"')";
    // document.getElementById("poster").style.backgroundColor = 'red';
}