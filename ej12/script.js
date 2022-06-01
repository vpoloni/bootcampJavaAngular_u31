// validamos con la expresión regular la fecha en el formato XX/XX/XXXX
function validarFecha() {
    let fecha = '05/04/1982';
    let exprecionRegularFecha = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;

    let esValidaFecha = (fecha.match(exprecionRegularFecha)) ? 'es válido' : 'no es válido';
    console.log(`El formato de esta fecha "${fecha}" ${esValidaFecha}`);
}
validarFecha();

// validamos con la expresión regular una dirección de email
function validarEmail() {
    let email = 'polonchak.veronika@gmail.com';
    let exprecionRegularEmail = /^([-.]|\w)+@([]|\w)+(\.\w{2,3})+$/;

    let esValidoEmail = (email.match(exprecionRegularEmail)) ? 'es válido' : 'no es válido';
    console.log(`El formato de este email "${email}" ${esValidoEmail}`);
}
validarEmail();

// invertimos con la expresión regular el orden del nombre y apellido dados 
function invertirOrdenPalabras(){
let nombreApellido = 'John Smith';
let exprecionRegularNombreApellido = /(\w+)\s(\w+)/;

let nombreApellidoInvertido = nombreApellido.replace(exprecionRegularNombreApellido, '$2, $1')
console.log(nombreApellidoInvertido)
}
invertirOrdenPalabras();

// eliminamos con la expresión regular la etiqueta <script> y todo contenido de una cadena HTML
function eliminarEtiquetaScript() {
    mensajeEtiqueta = 'Kyiv is the capital of Freedom <script> Contenido de una cadena de HTML </script>';
    console.log (`Mensaje con etiqueta: ${mensajeEtiqueta}`)
    let exprecionRegularScript = /<script[\s\S]*?>[\s\S]*?<\/script>/;

    mensajeEtiqueta = mensajeEtiqueta.replace(exprecionRegularScript, ' ');
    console.log(`Mensaje sin etiqueta: ${mensajeEtiqueta}`)
}
eliminarEtiquetaScript();

// reemplazamos los carácteres con la expresión regular
function escapeHTML() {
    cadena = "Bonnie &amp; Clyde \nBonnie &lt; Clyde"; 
    let replacements = [
        ["&", /&amp;/],
        ["\/", /&quot;/],
        ["<", /&lt;/],
        [">", /&gt;/]
    ];
    replacements.forEach(x => {
        cadena = cadena.replace(x[1], x[0]);

    });
    console.log(cadena);
}
escapeHTML();