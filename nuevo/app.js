// Array donde se guardaran los usuarios
const usuarios = [];

//Obtener el Formulario (area y salida)
const form = document.getElementById("userForm");
const salida = document.getElementById("salidaJSON");

form.addEventListener("submit", function (e) {  
    e.preventDefault(); // Evitar que se recargue la página al enviar el formulario
    
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    
    const nuevoUsuario = {
        nombre: nombre,
        correo: correo
    };

    // Agregar el nuevo usuario al array
    usuarios.push(nuevoUsuario);

    salida.textContent = JSON.stringify(usuarios, null, 2); // Mostrar el array en formato JSON en la salida

    form.reset(); // Limpiar los campos del formulario

})

