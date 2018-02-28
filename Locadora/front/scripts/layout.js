function redirect() {
    document.getElementById("login").style.transform = "rotate3d(0, 1, 0, 90deg)";
    setTimeout(function(){
        document.getElementById("cadastrar").style.transform = "rotate3d(0, 1, 0, 0deg)";
    }, 500)
}

function voltar() {

    document.getElementById("cadastrar").style.transform = "rotate3d(0, 1, 0, 90deg)";
    setTimeout(function(){
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