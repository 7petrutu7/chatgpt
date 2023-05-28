document.addEventListener("DOMNodeInserted", () => {
  const telefonInput = document.getElementById("numarTelefon");

  if (telefonInput && !telefonInput.dataset.listenerAdaugat) {
    telefonInput.addEventListener("input", () => {
      verificaTelefon();
    });

    // Adăugați un atribut personalizat pentru a evita adăugarea multiplă a event listener-ului
    telefonInput.dataset.listenerAdaugat = true;
  }
});

function verificaTelefon() {
  const telefonInput = document.getElementById("numarTelefon");
  if (!telefonInput) return;

  const telefonValue = telefonInput.value.trim();
  const errorMsgElement = document.createElement("div");
  errorMsgElement.className = "error-msg";

  // Verificați dacă există deja un mesaj de eroare
  const existingErrorMsg = telefonInput.nextElementSibling;

  if (telefonValue === "") {
    errorMsgElement.innerText = "Trebuie să introduceți un număr de telefon.";

    if (!existingErrorMsg || existingErrorMsg.className !== "error-msg") {
      telefonInput.insertAdjacentElement("afterend", errorMsgElement);
    } else {
      existingErrorMsg.innerText = errorMsgElement.innerText;
    }
  } else if (telefonValue.length < 3 || telefonValue.length > 20) {
    errorMsgElement.innerText = "Numărul de telefon trebuie să conțină cel puțin 3 cifre, dar să nu depășească 20.";

    if (!existingErrorMsg || existingErrorMsg.className !== "error-msg") {
      telefonInput.insertAdjacentElement("afterend", errorMsgElement);
    } else {
      existingErrorMsg.innerText = errorMsgElement.innerText;
    }
  } else if ((telefonValue.match(/\+/g) || []).length > 1) {
    errorMsgElement.innerText = "Vă rugăm să folosiți doar un singur simbol +.";

    if (!existingErrorMsg || existingErrorMsg.className !== "error-msg") {
      telefonInput.insertAdjacentElement("afterend", errorMsgElement);
    } else {
      existingErrorMsg.innerText = errorMsgElement.innerText;
    }
  } else if (telefonValue.includes("+") && telefonValue[0] !== "+") {
    errorMsgElement.innerText = "Vă rugăm să introduceți simbolul + înaintea numărului de telefon.";

    if (!existingErrorMsg || existingErrorMsg.className !== "error-msg") {
      telefonInput.insertAdjacentElement("afterend", errorMsgElement);
    } else {
      existingErrorMsg.innerText = errorMsgElement.innerText;
    }
  } else if (!/^\+?[0-9]+$/.test(telefonValue)) {
    errorMsgElement.innerText = "Numărul de telefon trebuie să conțină doar cifre și simbolul +.";

    if (!existingErrorMsg || existingErrorMsg.className !== "error-msg") {
      telefonInput.insertAdjacentElement("afterend", errorMsgElement);
    } else {
      existingErrorMsg.innerText = errorMsgElement.innerText;
    }
  } else {
    if (existingErrorMsg && existingErrorMsg.className === "error-msg") {
      existingErrorMsg.remove();
    }
  }
}
