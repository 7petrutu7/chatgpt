// vanzator.js
document.addEventListener("DOMNodeInserted", () => {
  const vanzatorInput = document.getElementById("vanzator");

  if (vanzatorInput && !vanzatorInput.dataset.listenerAdaugat) {
    vanzatorInput.addEventListener("change", () => {
      verificaVanzator();
    });

    vanzatorInput.dataset.listenerAdaugat = true;
  }
});

function verificaVanzator() {
  const vanzatorInput = document.getElementById("vanzator");
  if (!vanzatorInput) return;

  const vanzatorValue = vanzatorInput.value;
  const errorMsgElement = document.createElement("div");
  errorMsgElement.className = "error-msg";

  const existingErrorMsg = vanzatorInput.nextElementSibling;

  if (vanzatorValue === "") {
    errorMsgElement.innerText = "Vă rugăm să alegeți tipul de vânzător.";

    if (!existingErrorMsg || existingErrorMsg.className !== "error-msg") {
      vanzatorInput.insertAdjacentElement("afterend", errorMsgElement);
    } else {
      existingErrorMsg.innerText = errorMsgElement.innerText;
    }
  } else {
    if (existingErrorMsg && existingErrorMsg.className === "error-msg") {
      existingErrorMsg.remove();
    }
  }
}
