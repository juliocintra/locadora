function mostrarSnackbar(message, status) {
    var snackBar = document.getElementById("snackbar");
    snackBar.className = "show";
    snackBar.innerHTML = message;
    if (status)
        snackBar.style.backgroundColor = '#09B548';
    else
        snackBar.style.backgroundColor = 'lightcoral';
    setTimeout(function(){
        snackBar.className = snackBar.className.replace("show", "");

    }, 1500);
}


function validaUser(btn) {
   console.log(btn.value);
   // var regex = /^[a-z0-9_-]/;
   // if (btn.value == regex) {
   //    alert('FRACA');
   // }
}
