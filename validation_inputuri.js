document.addEventListener("DOMNodeInserted", () => {
  const butonAdaugaAnunt = document.getElementById("buton_adauga_anunt");

  if (butonAdaugaAnunt && !butonAdaugaAnunt.dataset.listenerAdaugat) {
    butonAdaugaAnunt.removeEventListener("click", onClickButonAdaugaAnunt);
    butonAdaugaAnunt.addEventListener("click", onClickButonAdaugaAnunt);

    // Adăugați un atribut personalizat pentru a evita adăugarea multiplă a event listener-ului
    butonAdaugaAnunt.dataset.listenerAdaugat = true;
  }
});

function onClickButonAdaugaAnunt(e) {
  e.preventDefault(); // Adăugați această linie

  verificaTitlu();
  verificaDescriere();
  verificaPret();
  verificaMoneda();
  verificaVanzator();
  verificaStare();
  verificaLocatie();
  verificaOras();
  verificaTelefon();

  const errorMsgs = document.querySelectorAll(".error-msg");
  if (errorMsgs.length === 0) {
    const formAnunt = document.getElementById("formular-anunt");
    formAnunt.dispatchEvent(new Event("submit"));

  }
}

