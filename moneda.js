document.addEventListener("DOMNodeInserted", () => {
  const monedaInput = document.getElementById("moneda");

  if (monedaInput && !monedaInput.dataset.listenerAdaugat) {
    monedaInput.addEventListener("change", () => {
      verificaMoneda();
    });

    monedaInput.dataset.listenerAdaugat = true;
  }
});

function verificaMoneda() {
  const monedaInput = document.getElementById("moneda");
  if (!monedaInput) return;

  const monedaValue = monedaInput.value.trim();
  const errorMsgElement = document.createElement("div");
  errorMsgElement.className = "error-msg";

  const existingErrorMsg = monedaInput.nextElementSibling;

  if (monedaValue === "") {
    errorMsgElement.innerText = "Vă rugăm să selectați o monedă pentru prețul ales.";

    if (!existingErrorMsg || existingErrorMsg.className !== "error-msg") {
      monedaInput.insertAdjacentElement("afterend", errorMsgElement);
    } else {
      existingErrorMsg.innerText = errorMsgElement.innerText;
    }
  } else {
    if (existingErrorMsg && existingErrorMsg.className === "error-msg") {
      existingErrorMsg.remove();
    }
  }
}

