document.addEventListener("DOMNodeInserted", () => {
  const descriereInput = document.getElementById("descriere");

  if (descriereInput && !descriereInput.dataset.listenerAdaugat) {
    descriereInput.addEventListener("input", () => {
      verificaDescriere();
    });

    // Adăugați un atribut personalizat pentru a evita adăugarea multiplă a event listener-ului
    descriereInput.dataset.listenerAdaugat = true;
  }

 
});

function verificaDescriere() {
  const descriereInput = document.getElementById("descriere");
  if (!descriereInput) return;

  const descriereValue = descriereInput.value.trim();
  const errorMsgElement = document.createElement("div");
  errorMsgElement.className = "error-msg";

  // Verificați dacă există deja un mesaj de eroare
  const existingErrorMsg = descriereInput.nextElementSibling;

  if (descriereValue === "") {
    errorMsgElement.innerText = "Vă rugăm să completați descrierea.";

    if (!existingErrorMsg || existingErrorMsg.className !== "error-msg") {
      descriereInput.insertAdjacentElement("afterend", errorMsgElement);
    } else {
      existingErrorMsg.innerText = errorMsgElement.innerText;
    }
  } else if (descriereValue.length < 50 || descriereValue.length > 5000) {
    errorMsgElement.innerText = "Descrierea trebuie să conțină minim 50 de caractere, dar nu mai mult de 5000.";

    if (!existingErrorMsg || existingErrorMsg.className !== "error-msg") {
      descriereInput.insertAdjacentElement("afterend", errorMsgElement);
    } else {
      existingErrorMsg.innerText = errorMsgElement.innerText;
    }
  } else {
    if (existingErrorMsg && existingErrorMsg.className === "error-msg") {
      existingErrorMsg.remove();
    }
  }
}

