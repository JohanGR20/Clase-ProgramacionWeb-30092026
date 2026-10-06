// Define una función llamada agregarPantalla.
// Recibe un parámetro llamado value, que será el valor a mostrar en la calculadora.
function agregarPantalla(value) {
    // Busca el elemento HTML con id "pantalla" y agrega el valor recibido al contenido actual.
    // Es decir, si ya hay "12" y se manda "3", queda "123".
    document.getElementById("pantalla").value += value;
}

// Define una función llamada limpiarPantalla.
// Sirve para borrar lo que está escrito en la pantalla.
function limpiarPantalla() {
    // Busca el elemento con id "pantalla" y lo deja vacío.
    document.getElementById("pantalla").value = "";
}

// Define una función llamada calcular.
// Sirve para evaluar la operación que el usuario escribió.
function calcular() {
    // try intenta ejecutar el código. Si falla, lo captura en catch.
    try {
        // Guarda el resultado de evaluar la expresión escrita en la pantalla.
        // Por ejemplo, si la pantalla dice "2+2", eval lo interpreta como 4.
        var resultado = eval(document.getElementById("pantalla").value);

        // Muestra el resultado en la pantalla de la calculadora.
        document.getElementById("pantalla").value = resultado;
    } catch (error) {
        // Si la expresión es inválida (por ejemplo "2++"), se muestra "Error".
        document.getElementById("pantalla").value = "Error";
    }
}