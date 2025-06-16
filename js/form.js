document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("mail");
    const asunto = document.getElementById("asunto");
    const mensaje = document.getElementById("mensaje");

    const campos = [nombre, apellido, email, asunto, mensaje];
    const errores = [];

    campos.forEach(c => c.classList.remove("error"));

    if (!nombre.value.trim()) {
      errores.push("El nombre es obligatorio.");
      nombre.classList.add("error");
    }

    if (!apellido.value.trim()) {
      errores.push("El apellido es obligatorio.");
      apellido.classList.add("error");
    }

    if (!email.value.trim()) {
      errores.push("El email es obligatorio.");
      email.classList.add("error");
    } else if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
      errores.push("El formato del email no es válido.");
      email.classList.add("error");
    }

    if (!asunto.value.trim()) {
      errores.push("El asunto es obligatorio.");
      asunto.classList.add("error");
    }

    if (!mensaje.value.trim()) {
      errores.push("El mensaje es obligatorio.");
      mensaje.classList.add("error");
    }

    if (errores.length > 0) {
      mostrarModalError(errores);
    } else {
      mostrarModalExito();
      form.reset();
    }
  });
});

function mostrarModalError(errores) {
  const modal = document.getElementById("modal-error");
  const texto = document.getElementById("modal-error-text");
  texto.innerHTML = `<ul>${errores.map(e => `<li>${e}</li>`).join("")}</ul>`;
  modal.style.display = "flex";
}

function mostrarModalExito() {
  const modal = document.getElementById("modal-exito");
  modal.style.display = "flex";
}

function cerrarModal(id) {
  document.getElementById(id).style.display = "none";
}
