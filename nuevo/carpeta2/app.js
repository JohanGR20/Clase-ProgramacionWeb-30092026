const form = document.getElementById("userForm");
const salida = document.getElementById("salidaJSON");
const descargaBtn = document.getElementById("descargarBtn");



let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


mostrarUsuarios();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;

  const nuevoUsuario = {
    nombre,
    correo,
  };
  usuarios.push(nuevoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  mostrarUsuarios();
  form.reset();

}); 

function mostrarUsuarios() {
  salida.textContent = JSON.stringify(usuarios, null, 2);

}


descargaBtn.addEventListener("click", () => {
    const contenidoJSON = JSON.stringify(usuarios, null, 2);
    const blob = new Blob([contenidoJSON], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "usuarios.json";
    a.click(); 

    URL.revokeObjectURL(url);
});