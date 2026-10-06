// Obtiene el formulario, el área de salida y el botón para descargar los datos.
const form = document.getElementById("userForm");
const salida = document.getElementById("salidaJSON");
const descargaBtn = document.getElementById("descargarBtn");


// Recupera los usuarios almacenados en el navegador; si no hay datos, inicia una lista vacía.
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Muestra en la página los usuarios cargados desde el almacenamiento local.
mostrarUsuarios();

// Procesa el envío del formulario para guardar un usuario nuevo.
form.addEventListener("submit", (e) => {
  // Evita que el formulario recargue la página al enviarse.
  e.preventDefault();

  // Lee el nombre y el correo ingresados en el formulario.
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;

  // Organiza los datos capturados en un objeto de usuario.
  const nuevoUsuario = {
    nombre,
    correo,
  };

  // Agrega el usuario a la lista y actualiza los datos guardados en el navegador.
  usuarios.push(nuevoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  // Actualiza la lista visible y limpia los campos del formulario.
  mostrarUsuarios();
  form.reset();

});

// Convierte la lista de usuarios a texto JSON y la muestra en la página.
function mostrarUsuarios() {
  salida.textContent = JSON.stringify(usuarios, null, 2);

}


// Prepara y descarga un archivo JSON con la lista de usuarios guardados.
descargaBtn.addEventListener("click", () => {
  // Convierte los datos a JSON con formato legible.
  const contenidoJSON = JSON.stringify(usuarios, null, 2);

  // Crea un archivo temporal en memoria con el contenido JSON.
  const blob = new Blob([contenidoJSON], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  // Crea un enlace temporal e inicia la descarga como "usuarios.json".
  const a = document.createElement("a");
  a.href = url;
  a.download = "usuarios.json";
  a.click();

  // Libera la URL temporal creada para la descarga.
  URL.revokeObjectURL(url);
});