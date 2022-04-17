function passw() {

    var pass1 = document.getElementById("passw1").value;
    var pass2 = document.getElementById("passw2").value;

    if (pass1.length == 0 || pass2.length == 0) {

       alert("La contraseña no puede estar vacía")
       return false;
    };

    if (pass1 != pass2) {

        alert("Las contraseñas no coinciden.");
        return false;
     } else {
         alert("Las contraseñas coinciden.");
         return true;
     };
}

function onlynum() {
    var phone = document.getElementById("phone").value;
    if (isNaN(phone)) {
        alert("Solo puede añadir números.");
        return false;
    }
}

function chclyel() {
    document.getElementById("chcolor").style.color = "#e3c249";
}

function chclyel1() {
    document.getElementById("chcolor1").style.color = "#e3c249";
}
function chclyel2() {
    document.getElementById("chcolor2").style.color = "#e3c249";
}
function chclyel3() {
    document.getElementById("chcolor3").style.color = "#e3c249";
}
function chclyel4() {
    document.getElementById("chcolor4").style.color = "#e3c249";
}
function chclyel5() {
    document.getElementById("chcolor5").style.color = "#e3c249";
}
function chclyel6() {
    document.getElementById("chcolor6").style.color = "#e3c249";
}
function chclyel7() {
    document.getElementById("chcolor7").style.color = "#e3c249";
}
function chclyel8() {
    document.getElementById("chcolor8").style.color = "#e3c249";
}
function chclyel9() {
    document.getElementById("chcolor9").style.color = "#e3c249";
}

function vaciar(control) {
    control.value == '';
}

function verificar(control) {
    if (control.value == '') {
        alert("Este campo no puede quedar vacío.");
    }
}