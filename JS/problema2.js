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
    var salario = parseInt(valor1);
    var interes = parseInt(valor);
    var venta = interes*0.1;
    var total = salario + venta

    document.formulario.sueldoti.value = "$"+total;
}

function borrar(){
    document.formulario.sueldoti.value = "";
    document.formulario.cantidad.value = "";
    document.formulario.cantidad1.value = "";
}