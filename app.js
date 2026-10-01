function agregarPantalla(value) {
    document.getElementById("pantalla").value += value;
}
function limpiarPantalla() {
    document.getElementById("pantalla").value = "";
}
function calcular() {
        try {
            var resultado = eval(document.getElementById("pantalla").value);
            document.getElementById("pantalla").value = resultado;
        } catch (error) {
            document.getElementById("pantalla").value = "Error";
        }
}