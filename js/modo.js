document.addEventListener("DOMContentLoaded", function () {
  const darkButton = document.querySelector(".dark-mode-button");
  const lightButton = document.querySelector(".light-mode-button");
  const body = document.body;

  // Aplicar el modo guardado
  if (localStorage.getItem("modo") === "oscuro") {
    body.classList.add("modo-oscuro");
  }

  // Mostrar el botón correcto al cargar
  toggleButtons();

  // Evento: Activar modo oscuro
  darkButton.addEventListener("click", () => {
    body.classList.add("modo-oscuro");
    localStorage.setItem("modo", "oscuro");
    toggleButtons();
  });

  // Evento: Activar modo claro
  lightButton.addEventListener("click", () => {
    body.classList.remove("modo-oscuro");
    localStorage.setItem("modo", "claro");
    toggleButtons();
  });

  function toggleButtons() {
    const isDark = body.classList.contains("modo-oscuro");
    darkButton.style.display = isDark ? "none" : "inline-block";
    lightButton.style.display = isDark ? "inline-block" : "none";
  }
});
