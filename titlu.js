document.addEventListener("DOMNodeInserted", () => {
  const titluInput = document.getElementById("titlu");

  if (titluInput && !titluInput.dataset.listenerAdaugat) {
    titluInput.addEventListener("input", () => {
      verificaTitlu();
    });

    // Adăugați un atribut personalizat pentru a evita adăugarea multiplă a event listener-ului
    titluInput.dataset.listenerAdaugat = true;
  }
});

function verificaTitlu() {
  const titluInput = document.getElementById("titlu");
  if (!titluInput) return;

  const titluValue = titluInput.value.trim();
  const errorMsgElement = document.createElement("div");
  errorMsgElement.className = "error-msg";

  // Verificați dacă există deja un mesaj de eroare
  const existingErrorMsg = titluInput.nextElementSibling;

  if (titluValue === "") {
    errorMsgElement.innerText = "Trebuie să introduceți un titlu pentru anunțul dvs.";

    if (!existingErrorMsg || existingErrorMsg.className !== "error-msg") {
      titluInput.insertAdjacentElement("afterend", errorMsgElement);
    } else {
      existingErrorMsg.innerText = errorMsgElement.innerText;
    }
  } else if (titluValue.length < 10 || titluValue.length > 80) {
    errorMsgElement.innerText = "Titlul trebuie să conțină cel puțin 10 caractere, dar să nu depășească 80.";

    if (!existingErrorMsg || existingErrorMsg.className !== "error-msg") {
      titluInput.insertAdjacentElement("afterend", errorMsgElement);
    } else {
      existingErrorMsg.innerText = errorMsgElement.innerText;
    }
  } else {
    if (existingErrorMsg && existingErrorMsg.className === "error-msg") {
      existingErrorMsg.remove();
    }
  }
}

