// variables 
var numero = "",
    operacion = "",
    acumulativo = "",
    arrayNumeros = [];

// función que resetea las variables con valores iniciales y limpia el display
function limpiarPantalla() {
    numero = "";
    operacion = "";
    acumulativo = "";
    arrayNumeros = [];
    document.getElementById("pantalla").value = '';
}

// función que resetea las variables con valores iniciales
function vaciarMemoria() {
    numero = "";
    operacion = "";
    acumulativo = "";
    arrayNumeros = [];
}

// función que guarda el número clickado 
function guardarNumero(id) {
    let numeroClickado = document.getElementById(id).innerHTML;
    numero = numero + numeroClickado;
    acumulativo = acumulativo + numeroClickado
    document.getElementById("pantalla").value = acumulativo;
}
 
// función que guarda la operación clickada
function guardarOperacion(id) {
    operacion = document.getElementById(id).innerHTML;
    arrayNumeros.push(numero);
    numero = "";
    acumulativo = acumulativo + operacion;
    document.getElementById("pantalla").value = acumulativo;
}

// función que calcula suma/resta/multiplicación/división de dos operandos
function calcularDosOperandos() {
    if (arrayNumeros.length != 1 && numero === "") {
        alert("Has de seleccionar los operandos a calcular");
    } else {
        let resultado = "";
        switch (operacion) {

            case ("+"):
                resultado = parseFloat(arrayNumeros[0]) + parseFloat(numero);
                document.getElementById("pantalla").value = resultado;
                vaciarMemoria();
                break;

            case ("-"):
                resultado = arrayNumeros[0] - numero;
                document.getElementById("pantalla").value = resultado;
                vaciarMemoria();
                break;

            case ("*"):
                resultado = parseFloat(arrayNumeros[0]) * parseFloat(numero);
                document.getElementById("pantalla").value = resultado;
                vaciarMemoria();
                break;

            case ("/"):
                if (numero == 0) {
                    alert("No se puede dividir entre 0")
                    vaciarMemoria();
                } else {
                    resultado = arrayNumeros[0] / numero;
                    document.getElementById("pantalla").value = resultado;
                    vaciarMemoria();
                    break;
                }

        }
    }
}

// función que calcula la raíz cudrada del número clickado
function obtenerRaizCuadrada() {
    let resultado = Math.sqrt(numero);
    document.getElementById("pantalla").value = resultado;
    vaciarMemoria();
}

// fucnción que calcula el módulo del número clickado
function obtenerModulo() {
    let resultado = numero % 2;
    document.getElementById("pantalla").value = resultado;
    vaciarMemoria();
}

// función que hace calculo al clickar 1/x
function obtenerUnoEntreX() {
    let resultado = 1 / numero;
    document.getElementById("pantalla").value = resultado;
    vaciarMemoria();
}

// función que convirte un número positivo a un número negativo y viceversa
function cambiarSigno(){
    numero = -numero;
    acumulativo = -acumulativo;
    document.getElementById("pantalla").value = acumulativo;
}

// función que añade coma flotante al número clickado
function agregarPunto(){
    numero = numero + ".";
    acumulativo = acumulativo + ".";
    document.getElementById("pantalla").value = acumulativo;
}