function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}


function interes(){
    var valor1 = document.formulario.cantidad.value;
    var valor = document.formulario.cantidad1.value;
    var hombres = parseInt(valor1);
    var mujeres = parseInt(valor);
    var suma = hombres + mujeres
    var phombre = (hombres/suma)*100
    var pmujer = (mujeres/suma)*100

    document.formulario.sueldoti.value = phombre+"%";
    document.formulario.sueldoti1.value = pmujer+"%";
}

function borrar(){
    document.formulario.sueldoti.value = "";
    document.formulario.sueldoti1.value = "";
    document.formulario.cantidad.value = "";
    document.formulario.cantidad1.value = "";
}