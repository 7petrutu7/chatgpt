// stare.js
document.addEventListener("DOMNodeInserted", () => {
  const stareInput = document.getElementById("stare");

  if (stareInput && !stareInput.dataset.listenerAdaugat) {
    stareInput.addEventListener("change", () => {
      verificaStare();
    });

    stareInput.dataset.listenerAdaugat = true;
  }
});

function verificaStare() {
  const stareInput = document.getElementById("stare");
  if (!stareInput) return;

  const stareValue = stareInput.value;
  const errorMsgElement = document.createElement("div");
  errorMsgElement.className = "error-msg";

  const existingErrorMsg = stareInput.nextElementSibling;

  if (stareValue === "") {
    errorMsgElement.innerText = "Vă rugăm să alegeți starea produsului.";

    if (!existingErrorMsg || existingErrorMsg.className !== "error-msg") {
      stareInput.insertAdjacentElement("afterend", errorMsgElement);
    } else {
      existingErrorMsg.innerText = errorMsgElement.innerText;
    }
  } else {
    if (existingErrorMsg && existingErrorMsg.className === "error-msg") {
      existingErrorMsg.remove();
    }
  }
}

