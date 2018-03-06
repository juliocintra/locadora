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

function transitionMenu() {
    var menu = document.getElementsByClassName("geral");
    console.log(menu);

    // var menu = document.getElementById("longBarVertical").className;
    //
    // if (menu == 'longBarVertical') {
    //
    //         document.getElementById("menu").classList.remove("menu");
    //         document.getElementById("longBarVertical").classList.remove("longBarVertical");
    //
    //         document.getElementById("menu").classList.add("expandirMenu");
    //         document.getElementById("longBarVertical").classList.add("expandirLongBarVertical");
    // }
    // else {
    //     // document.getElementById("menu").classList.remove("expandirMenu");
    //     document.getElementById("longBarVertical").classList.remove("expandirMenu");
    //
    //     // document.getElementById("menu").classList.add("menu");
    //     document.getElementById("longBarVertical").classList.add("longBarVertical");
    // }
    // var longBarVertical = document.getElementById("longBarVertical");
}