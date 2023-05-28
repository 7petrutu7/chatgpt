document.addEventListener("DOMNodeInserted", () => {
  const locatieSelect = document.getElementById("locatie");

  if (locatieSelect && !locatieSelect.dataset.listenerAdaugat) {
    locatieSelect.addEventListener("change", () => {
      verificaLocatie();
    });

    locatieSelect.dataset.listenerAdaugat = true;
  }
});

function verificaLocatie() {
  const locatieSelect = document.getElementById("locatie");
  if (!locatieSelect) return;

  const selectedIndex = locatieSelect.selectedIndex;
  const errorMsgElement = document.createElement("div");
  errorMsgElement.className = "error-msg";

  const existingErrorMsg = locatieSelect.nextElementSibling;

  if (selectedIndex === 0) {
    errorMsgElement.innerText = "Vă rugăm să selectați o locație pentru anunțul dvs.";

    if (!existingErrorMsg || existingErrorMsg.className !== "error-msg") {
      locatieSelect.insertAdjacentElement("afterend", errorMsgElement);
    } else {
      existingErrorMsg.innerText = errorMsgElement.innerText;
    }
  } else {
    if (existingErrorMsg && existingErrorMsg.className === "error-msg") {
      existingErrorMsg.remove();
    }
  }
}
