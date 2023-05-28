let caleCurenta = [];
let containerCategorii = document.getElementById("categorii");
let butonInapoi = document.getElementById("inapoi");
let infoCategorie = document.createElement("div");

function afiseazaCategorii(categorii, resetCale = false) {
  if (resetCale) {
    caleCurenta = [];
  }
  containerCategorii.innerHTML = "";
  for (let categorie of categorii) {
    let divCategorie = document.createElement("div");
    divCategorie.className = "categorie";
    divCategorie.onclick = function () {
      caleCurenta.push(categorie);
      if (categorie.subcategorii.length > 0) {
        afiseazaCategorii(categorie.subcategorii);
        butonInapoi.style.display = "block";
      } else {
        afiseazaInfoCategorie();
      }
    };

    let img = document.createElement("img");
    img.src = categorie.imagine;
    divCategorie.appendChild(img);

    let numeCategorie = document.createElement("span");
    numeCategorie.innerText = categorie.nume;
    divCategorie.appendChild(numeCategorie);

    containerCategorii.appendChild(divCategorie);
  }

  if (resetCale) {
    ascundeInputuri(); // Adăugați această linie pentru a ascunde inputurile
  }
}

function ascundeInputuri() {
  const inputContainer = document.getElementById("input-container");
  inputContainer.style.display = "none";
}

function afiseazaInfoCategorie() {
  containerCategorii.innerHTML = "";
  butonInapoi.style.display = "none";

  infoCategorie.innerHTML = caleCurenta.map((categorie) => categorie.nume).join(" - ");
  containerCategorii.appendChild(infoCategorie);

  afiseazaInputuri();

  let butonSchimba = document.createElement("button");
  butonSchimba.innerText = "Schimbă";
  butonSchimba.onclick = function () {
    afiseazaCategorii(categoriiPrincipale, true);
  };
  containerCategorii.appendChild(butonSchimba);
}

afiseazaCategorii(categoriiPrincipale);