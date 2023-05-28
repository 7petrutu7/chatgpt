document.addEventListener("DOMNodeInserted", () => {
  const orasInput = document.getElementById("oras");

  if (orasInput && !orasInput.dataset.listenerAdaugat) {
    orasInput.addEventListener("change", () => {
      verificaOras();
    });
    orasInput.dataset.listenerAdaugat = true;
  }
});

function verificaOras() {
  const orasSelect = document.getElementById("oras");
  if (!orasSelect) return;

  const selectedIndex = orasSelect.selectedIndex;
  const errorMsgElement = document.createElement("div");
  errorMsgElement.className = "error-msg";

  const existingErrorMsg = orasSelect.nextElementSibling;

  if (selectedIndex === 0) {
    errorMsgElement.innerText = "Vă rugăm să selectați un oraș pentru anunțul dvs.";

    if (!existingErrorMsg || existingErrorMsg.className !== "error-msg") {
      orasSelect.insertAdjacentElement("afterend", errorMsgElement);
    } else {
      existingErrorMsg.innerText = errorMsgElement.innerText;
    }
  } else {
    if (existingErrorMsg && existingErrorMsg.className === "error-msg") {
      existingErrorMsg.remove();
    }
  }
}
