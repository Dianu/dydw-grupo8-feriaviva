function openAccordion(accordionItem, content, icon) {
  accordionItem.classList.add("active");
  content.style.maxHeight = content.scrollHeight + "px";
  icon.classList.remove("fa-plus");
  icon.classList.add("fa-minus");
}

function closeAccordion(accordionItem, content, icon) {
  accordionItem.classList.remove("active");
  content.style.maxHeight = "0";
  icon.classList.remove("fa-minus");
  icon.classList.add("fa-plus");
}

function closeAllAccordions(accordionButtons) {
  accordionButtons.forEach((button) => {
    const accordionItem = button.parentElement;
    const content = button.nextElementSibling;
    const icon = button.querySelector(".accordion-icon");

    closeAccordion(accordionItem, content, icon);
  });
}

function handleAccordionClick(event, accordionButtons) {
  const button = event.currentTarget;
  const accordionItem = button.parentElement;
  const content = button.nextElementSibling;
  const icon = button.querySelector(".accordion-icon");

  // Si el acordeón ya está abierto, solo lo cerramos
  if (accordionItem.classList.contains("active")) {
    closeAccordion(accordionItem, content, icon);
  } else {
    closeAllAccordions(accordionButtons);
    // Abrir el acordeón seleccionado
    openAccordion(accordionItem, content, icon);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", (event) =>
      handleAccordionClick(event, accordionButtons)
    );
  });
});
