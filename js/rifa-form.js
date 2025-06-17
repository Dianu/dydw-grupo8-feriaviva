document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const cantidadInput = document.getElementById("cantidad_rifas");
  const totalElement = document.querySelector(".rifa-form-section p strong");
  const PRECIO_UNITARIO = 1000;

  function actualizarTotal() {
    const cantidad = parseInt(cantidadInput.value) || 0;
    const total = cantidad * PRECIO_UNITARIO;
    totalElement.textContent = `TOTAL: $${total.toLocaleString("es-AR")}`;
  }

  cantidadInput.addEventListener("input", actualizarTotal);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submit");

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const cantidad = document.getElementById("cantidad_rifas");

    const campos = [nombre, apellido, email, cantidad];
    const errores = [];

    campos.forEach((c) => c.classList.remove("error"));

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

    if (!cantidad.value.trim()) {
      errores.push("La cantidad es obligatoria.");
      cantidad.classList.add("error");
    } else if (cantidad.value < 1 || cantidad.value > 5) {
      errores.push("La cantidad debe estar entre 1 y 5.");
      cantidad.classList.add("error");
    }

    console.log({ errores });
    if (errores.length > 0) {
      mostrarModalError(errores);
    } else {
      mostrarModalExito();
      form.reset();
      actualizarTotal();
    }
  });
});

function mostrarModalError(errores) {
  const modal = document.getElementById("modal-error");
  const texto = document.getElementById("modal-error-text");
  texto.innerHTML = `<ul>${errores.map((e) => `<li>${e}</li>`).join("")}</ul>`;
  modal.style.display = "flex";
}

function mostrarModalExito() {
  const modal = document.getElementById("modal-exito");
  const texto = document.getElementById("modal-exito-text");
  texto.innerHTML =
    "¡Muchas gracias por su compra!<br>A continuación será redirigido para continuar el proceso de pago.";
  modal.style.display = "flex";
}

function cerrarModal(id) {
  document.getElementById(id).style.display = "none";
}
