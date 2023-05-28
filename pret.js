document.addEventListener("DOMNodeInserted", () => {
  const pretInput = document.getElementById("pret");

  if (pretInput && !pretInput.dataset.listenerAdaugat) {
    pretInput.addEventListener("input", () => {
      verificaPret();
    });

    pretInput.dataset.listenerAdaugat = true;
  }
});

function verificaPret() {
  const pretInput = document.getElementById("pret");
  if (!pretInput) return;

  const pretValue = pretInput.value.trim();
  const errorMsgElement = document.createElement("div");
  errorMsgElement.className = "error-msg";

  const existingErrorMsg = pretInput.nextElementSibling;

  if (pretValue === "") {
    errorMsgElement.innerText = "Vă rugăm să introduceți si pretul.";

    if (!existingErrorMsg || existingErrorMsg.className !== "error-msg") {
      pretInput.insertAdjacentElement("afterend", errorMsgElement);
    } else {
      existingErrorMsg.innerText = errorMsgElement.innerText;
    }
  } else {
    if (existingErrorMsg && existingErrorMsg.className === "error-msg") {
      existingErrorMsg.remove();
    }
  }
}

