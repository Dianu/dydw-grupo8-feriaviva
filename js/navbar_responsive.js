const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
});
