

function inputuriPrestariServicii() {
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"},
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie"},
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon"},
    ];
  }

  function inputuriLocuriDeMunca() {
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Salariu de la", id: "SalariuDeLa" , class: "optional-input" },
    { tip: "number", eticheta: "Pana la", id: "panaLa", class: "optional-input"  },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "number", eticheta: "Numarul de posturi disponibile", id: "numarulDePosturiDisponibile", class: "optional-input"  },
    { tip: "select", eticheta: "Tip job", id: "tipJob", optiuni: ["Full time", "Part time", "Project Based", "Altele"], class: "optional-input"  },
    { tip: "select", eticheta: "Tip contract", id: "tipcontract", optiuni: ["Perioada determinata", "Perioada nedeterminata", "Colaborare"] , class: "optional-input" },
    { tip: "select", eticheta: "Nivelul de studii", id: "nivelulDeStudii", optiuni: ["Necalificat", "Calificat", "Student", "Absolvent"] , class: "optional-input" },
    { tip: "select", eticheta: "Nivelul de experienta", id: "nivelulDeExperienta", optiuni: ["Fara experienta", "Entry-level (<2 ani)", "Mid-level (2-5 ani)", "Senior-level (>5 ani)", "Manager / Executiv"] , class: "optional-input" },
    { tip: "select", eticheta: "Mobilitatea postului", id: "mobilitateaPostului", optiuni: ["Necesita deplasari", "Munca la distanta", "Locatie stabila"] , class: "optional-input" },
    { tip: "text", eticheta: "Numele firmei", id: "numeleFirmeiLocuriDeMunca" },
    { tip: "text", eticheta: "CUI / CIF", id: "cuiCifLocuriDeMunca" },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }


  function inputuriAgroSiIndustrieEchipamenteSiArticoleZootehnie() {
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }


  function inputuriAgroSiIndustrieCerealePlantePomi (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriAgroSiIndustrieProdusePiataAlimentatie (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriAgroSiIndustrieUtilajeAgricoleSiIndustriale (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriAgroSiIndustrieAnimaleDomesticeSiPasari (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Sex", id: "sex", optiuni: ["Masculin", "Feminin"] , class: "optional-input" },
    { tip: "select", eticheta: "Varsta", id: "varsta", optiuni: ["1-6 luni", "6-12 luni","1-3 ani","3-5 ani","5-10 ani","peste 10 ani"] , class: "optional-input" },    
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriAnimaleDeCompanieHrana (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriAnimaleDeCompanieAccesorii (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Folosit"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriAnimaleDeCompaniePisici (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Sex", id: "sex", optiuni: ["Masculin", "Feminin"] , class: "optional-input" },
    { tip: "select", eticheta: "Varsta", id: "varsta", optiuni: ["1-6 luni", "6-12 luni","1-3 ani","3-5 ani","5-10 ani","peste 10 ani"] , class: "optional-input" },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriAnimaleDeCompanieCaini (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Sex", id: "sex", optiuni: ["Masculin", "Feminin"] , class: "optional-input" },
    { tip: "select", eticheta: "Varsta", id: "varsta", optiuni: ["1-6 luni", "6-12 luni","1-3 ani","3-5 ani","5-10 ani","peste 10 ani"] , class: "optional-input" },
    { tip: "text", eticheta: "Cod Pedigree", id: "codPedigree" },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriSportSiTimpLiberArticoleSiEchipamenteSportive (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Folosit"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriSportSiTimpLiberRole (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Folosit"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriSportSiTimpLiberBiciclete (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Folosit"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriSportSiTimpLiberArtaObiecteDeColectie (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriSportSiTimpLiberInstrumenteMuzicale (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Folosit"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriSportSiTimpLiberAltele (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteUnisex (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Noua", "Secound hand"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteFemei (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Noua", "Secound hand"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteBarbati (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Noua", "Secound hand"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteUnisexIncaltaminte (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Noua", "Secound hand"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteFemeiIncaltaminte (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Noua", "Secound hand"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteBarbatiIncaltaminte (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Noua", "Secound hand"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteUnisexCureleSiBrauri (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Noua", "Secound hand"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteFemeiCureleSiBrauri (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Noua", "Secound hand"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteBarbatiCureleSiBrauri (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Noua", "Secound hand"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteUnisexPortofeleSiBorsete (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Noua", "Secound hand"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteFemeiPortofeleSiBorsete (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Noua", "Secound hand"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteBarbatiPortofeleSiBorsete (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Noua", "Secound hand"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteUnisexRucsacuriGentiGhiozdane (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Noua", "Secound hand"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }


  function inputuriModaSiFrumuseteFemeiRucsacuriGentiGhiozdane (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Noua", "Secound hand"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteBarbatiRucsacuriGentiGhiozdane (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Noua", "Secound hand"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteUnisexOchelari (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Noua", "Secound hand"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteBarbatiOchelari (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Noua", "Secound hand"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteFemeiOchelari (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Noua", "Secound hand"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteBarbatiBijuterii (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteUnisexBijuterii (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteFemeiBijuterii (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteBarbatiManusi (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Noua", "Secound hand"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteFemeiManusi (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Noua", "Secound hand"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteUnisexManusi (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Noua", "Secound hand"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteUnisexAltele (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteFemeiAltele (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriModaSiFrumuseteBarbatiAltele (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  // aici

  function inputuriMamaSiCopilHaineIncaltaminte (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Noua", "Secound hand"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriMamaSiCopil (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Folosit"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriCasaSiGradina (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Folosit"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriElectroniceSiElectrocasniceAlteElectronice (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Folosit"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriElectroniceSiElectrocasnicePieseAccesoriiPeriferice (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Folosit"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriElectroniceSiElectrocasniceAparateMedicale (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Folosit"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriElectroniceSiElectrocasniceVideoproiectoare (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Folosit"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriElectroniceSiElectrocasniceRetelisticaServere (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Folosit"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriElectroniceSiElectrocasniceIngrijirePersonala (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Folosit"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }
  
  function inputuriElectroniceSiElectrocasniceGpsSistemeDeNavigatie (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Folosit"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriElectroniceSiElectrocasniceCeasuri (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Folosit"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriElectroniceSiElectrocasniceDrone (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Folosit"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }
  
  function inputuriElectroniceSiElectrocasniceImprimanteScanere (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Folosit"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriElectroniceSiElectrocasniceTvAudioFotoVideo (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Folosit"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriElectroniceSiElectrocasniceElectrocasnice (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Folosit"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriElectroniceSiElectrocasniceMonitoare (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Folosit"] },
    { tip: "select", eticheta: "Diagonala", id: "diagonala", optiuni: ["Sub 18 inch", "18 - 20 inch", "21-22 inch","23-25 inch", "27-28 inch", "29-32 inch","34-35 inch", "Peste 40 inch"] , class: "optional-input" },
    { tip: "select", eticheta: "Primul proprietar", id: "primulProprietar", optiuni: ["Da", "Nu"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriElectroniceSiElectrocasniceCalculatoare (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Folosit"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriElectroniceSiElectrocasniceLaptopuri (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Folosit"] , class: "optional-input" },
    { tip: "select", eticheta: "Procesor", id: "procesor", optiuni: ["Intel", "AMD", "Apple", "Alt producator"] , class: "optional-input" },
    { tip: "select", eticheta: "Placa video", id: "placaVideo", optiuni: ["Integrata", "Dedicata"] , class: "optional-input" },
    { tip: "select", eticheta: "Primul proprietar", id: "primulProprietar", optiuni: ["Da", "Nu"] },
    { tip: "select", eticheta: "Tip hard disk", id: "tipHardDisk", optiuni: ["HDD + SSD", "HDD", "SSD", "Altele"] , class: "optional-input" },
    { tip: "select", eticheta: "Memorie ram", id: "memorieRam", optiuni: ["Sub 4", "4 - 6", "6 - 8", "8 - 12", "12 - 16", "16 - 24", "Peste 24"] , class: "optional-input" },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriElectroniceSiElectrocasniceTablete (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Folosit"] },
    { tip: "select", eticheta: "Accesorii", id: "accesorii", optiuni: ["Incarcator si casti", "Incarcator","Cablu de date", "Casti", "Fara"] , class: "optional-input" },
    { tip: "select", eticheta: "Cutie", id: "cutie", optiuni: ["Da", "Nu"] , class: "optional-input" },
    { tip: "select", eticheta: "Primul proprietar", id: "primulProprietar", optiuni: ["Da", "Nu"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriElectroniceSiElectrocasniceTelefoane (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Folosit"] },
    { tip: "select", eticheta: "Accesorii", id: "accesorii", optiuni: ["Incarcator si casti", "Incarcator","Cablu de date", "Casti", "Fara"] , class: "optional-input" },
    { tip: "select", eticheta: "Cutie", id: "cutie", optiuni: ["Da", "Nu"] , class: "optional-input" },
    { tip: "select", eticheta: "Primul proprietar", id: "primulProprietar", optiuni: ["Da", "Nu"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriImobiliareAlteProprietatiSauSpatii (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Tip vanzator", id: "tipVanzator", optiuni: ["Proprietar", "Agent", "Alte persoane (prieteni, cunoștințe, etc.)"] , class: "optional-input" },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriImobiliareDepoziteHale (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "number", eticheta: "Suprafata teren", id: "suprafataTeren" , placeholder: "mp" , class: "optional-input" },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "number", eticheta: "Suprafata utila", id: "suprafata" , placeholder: "mp" , class: "optional-input" },
    { tip: "select", eticheta: "Tip vanzator", id: "tipVanzator", optiuni: ["Proprietar", "Agent", "Alte persoane (prieteni, cunoștințe, etc.)"] , class: "optional-input" },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriImobiliareBirouriSpatiiComercialeDeVanzare (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Numar bai", id: "numarBai", optiuni: ["1", "2", "3 sau mai multe"], class: "optional-input"  },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "number", eticheta: "Suprafata utila", id: "suprafata" , placeholder: "mp" , class: "optional-input" },
    { tip: "select", eticheta: "Tip vanzator", id: "tipVanzator", optiuni: ["Proprietar", "Agent", "Alte persoane (prieteni, cunoștințe, etc.)"] , class: "optional-input" },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriImobiliareBirouriSpatiiComercialeDeInchiriat (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Numar bai", id: "numarBai", optiuni: ["1", "2", "3 sau mai multe"] , class: "optional-input" },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "number", eticheta: "Suprafata utila", id: "suprafata" , placeholder: "mp", class: "optional-input" },
    { tip: "select", eticheta: "Tip vanzator", id: "tipVanzator", optiuni: ["Proprietar", "Agent", "Alte persoane (prieteni, cunoștințe, etc.)"] , class: "optional-input" },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriImobiliareTerenuri (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "number", eticheta: "Suprafata teren", id: "suprafataTeren" , placeholder: "mp" , class: "optional-input" },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Tip teren", id: "tipTeren", optiuni: ["Intravilan", "Extravilan"] , class: "optional-input" },
    { tip: "select", eticheta: "Tip vanzator", id: "tipVanzator", optiuni: ["Proprietar", "Agent", "Alte persoane (prieteni, cunoștințe, etc.)"] , class: "optional-input" },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriImobiliareCaseVileDeInchiriat (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Numar bai", id: "numarBai", optiuni: ["1", "2", "3 sau mai multe"] , class: "optional-input" },
    { tip: "number", eticheta: "Suprafata utila", id: "suprafata" , placeholder: "mp", class: "optional-input" },
    { tip: "number", eticheta: "Suprafata teren", id: "suprafataTeren" , placeholder: "mp", class: "optional-input" },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] , class: "optional-input" },
    { tip: "select", eticheta: "Tip vanzator", id: "tipVanzator", optiuni: ["Proprietar", "Agent", "Alte persoane (prieteni, cunoștințe, etc.)"] , class: "optional-input" },
    { tip: "select", eticheta: "Locuinta mobilata / utilata", id: "locuintaMobilata", optiuni: ["Complet", "Partial", "Doar utilata", "Nemobilata / neutilata"] , class: "optional-input" },
    { tip: "select", eticheta: "An constructie", id: "anConstructie", optiuni: ["Dupa 2010","2000 - 2010", "1990 - 2000", "1980 - 1990", "Inainte de 1980"] , class: "optional-input" },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriImobiliareCaseVileDeVanzare (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Numar bai", id: "numarBai", optiuni: ["1", "2", "3 sau mai multe"] , class: "optional-input" },
    { tip: "number", eticheta: "Suprafata utila", id: "suprafata" , placeholder: "mp", class: "optional-input" },
    { tip: "number", eticheta: "Suprafata teren", id: "suprafataTeren" , placeholder: "mp", class: "optional-input" },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Tip vanzator", id: "tipVanzator", optiuni: ["Proprietar", "Agent", "Alte persoane (prieteni, cunoștințe, etc.)"] , class: "optional-input" },
    { tip: "select", eticheta: "Locuinta mobilata / utilata", id: "locuintaMobilata", optiuni: ["Complet", "Partial", "Doar utilata", "Nemobilata / neutilata"], class: "optional-input" },
    { tip: "select", eticheta: "An constructie", id: "anConstructie", optiuni: ["Dupa 2010","2000 - 2010", "1990 - 2000", "1980 - 1990", "Inainte de 1980"] },    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" , class: "optional-input" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriImobiliareApartamenteGarsoniereDeVanzare (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Numar bai", id: "numarBai", optiuni: ["1", "2", "3 sau mai multe"] , class: "optional-input" },
    { tip: "number", eticheta: "Suprafata utila", id: "suprafata" , placeholder: "mp", class: "optional-input" },
    { tip: "select", eticheta: "Incalzire", id: "incalzire", optiuni: ["Centrala termica", "Centralizată cu calorifere", "Altele"] , class: "optional-input" },
    { tip: "select", eticheta: "Tip vanzator", id: "tipVanzator", optiuni: ["Proprietar", "Agent", "Alte persoane (prieteni, cunoștințe, etc.)"] , class: "optional-input" },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] , class: "optional-input" },    
    { tip: "select", eticheta: "Locuinta mobilata / utilata", id: "locuintaMobilata", optiuni: ["Complet", "Partial", "Doar utilata", "Nemobilata / neutilata"] , class: "optional-input" },
    { tip: "select", eticheta: "An constructie", id: "anConstructie", optiuni: ["Dupa 2010","2000 - 2010", "1990 - 2000", "1980 - 1990", "Inainte de 1980"] },    { tip: "select", eticheta: "Compartimentare", id: "compartimentare" , class: "optional-input" , optiuni: ["Decomandat", "Semidecomandat", "Nedecomandat", "Circular"] },
    { tip: "select", eticheta: "Etaj", id: "etaj", optiuni: ["Demisol", "Parter", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10 si peste", "Ultimul etaj"] , class: "optional-input" },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriImobiliareApartamenteGarsoniereDeInchiriat (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] , class: "optional-input" },
    { tip: "select", eticheta: "Numar bai", id: "numarBai", optiuni: ["1", "2", "3 sau mai multe"] , class: "optional-input" },
    { tip: "number", eticheta: "Suprafata utila", id: "suprafata" , placeholder: "mp", class: "optional-input" },
    { tip: "select", eticheta: "Incalzire", id: "incalzire", optiuni: ["Centrala termica", "Centralizată cu calorifere", "Altele"] , class: "optional-input" },
    { tip: "select", eticheta: "Tip vanzator", id: "tipVanzator", optiuni: ["Proprietar", "Agent", "Alte persoane (prieteni, cunoștințe, etc.)"] , class: "optional-input" },
    { tip: "select", eticheta: "Locuinta mobilata / utilata", id: "locuintaMobilata", optiuni: ["Complet", "Partial", "Doar utilata", "Nemobilata / neutilata"] , class: "optional-input" },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] , class: "optional-input" },
    { tip: "select", eticheta: "An constructie", id: "anConstructie", optiuni: ["Dupa 2010","2000 - 2010", "1990 - 2000", "1980 - 1990", "Inainte de 1980"] },    { tip: "select", eticheta: "Compartimentare", class: "optional-input" , id: "compartimentare", optiuni: ["Decomandat", "Semidecomandat", "Nedecomandat", "Circular"] },
    { tip: "select", eticheta: "Etaj", id: "etaj", optiuni: ["Demisol", "Parter", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10 si peste", "Ultimul etaj"] , class: "optional-input" },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriAutoMotoSiAmbarcatiuniPieseAccesoriiConsumabile (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriAutoMotoSiAmbarcatiuniRotiJanteAnvelopeRoti (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Noua", "Secound Hand"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriAutoMotoSiAmbarcatiuniRotiJanteAnvelopeAnvelope (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Noua", "Secound Hand"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Tip anvelope", id: "tipAnvelope", optiuni: ["Vara", "Iarna","Toate sezoanele"] , class: "optional-input" },
    { tip: "select", eticheta: "Dimensiune", id: "dimensiune", optiuni: ["12 inch si sub","13", "14","15", "16", "17", "18","19", "20", "21", "22", "23 si peste"] , class: "optional-input" },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriAutoMotoSiAmbarcatiuniRotiJanteAnvelopeJante (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Noua", "Secound Hand"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Tip jante", id: "jante", class: "optional-input" , optiuni: ["Aliaj", "Otel"] },
    { tip: "select", eticheta: "Dimensiune", id: "dimensiune", class: "optional-input" , optiuni: ["13", "14","15", "16","16,5", "17","17,5", "18","19", "19,5", "20", "21", "22", "23 si peste"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriAutoMotoSiAmbarcatiuniAmbarcatiuniAlteVehicule (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Utilizat"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }
 
  function inputuriAutoMotoSiAmbarcatiuniCamioaneRuloteRemorciRemorci (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Utilizat"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriAutoMotoSiAmbarcatiuniCamioaneRuloteRemorciRulote (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },    
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    // ... completați cu restul inputurilor specifice pentru Trotinete
    ];
  }


  function inputuriAutoMotoSiAmbarcatiuniCamioaneRuloteRemorciCamioane (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "number", eticheta: "Rulaj", id: "rulaj", placeholder: "km" , class: "optional-input" },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];
  }

  function inputuriAutoMotoSiAmbarcatiuniTrotineteNonElectrice (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "number", eticheta: "Greutate", id: "greutate", placeholder: "kg" , class: "optional-input" },
    { tip: "select", eticheta: "Culoare", id: "culoare", optiuni: ["Negru", "Alb", "Gri", "Rosu", "Albastru", "Verde", "Galben", "Portocaliu", "Alta culoare"] , class: "optional-input" },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Utilizat"] },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    { tip: "select", eticheta: "Livrare", id: "livrare", optiuni: ["Da", "Nu"] , class: "optional-input" },
    ];
  }

  function inputuriAutoMotoSiAmbarcatiuniMotocicleteScutereAtv (){
    return [      
      { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
      { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
      { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
      { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
      { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
      { tip: "number", eticheta: "An de fabricație", id: "an_fabricatie" , class: "optional-input" },
      { tip: "number", eticheta: "Capacitate motor cm3", id: "capacitate_motor" , class: "optional-input" },
      { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
      { tip: "select", eticheta: "Culoare", id: "culoare", optiuni: ["Alb", "Albastru", "Gri", "Maro", "Negru", "Rosu", "Verde", "Alta culoare"] , class: "optional-input" },
      { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
      { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];

  }

  function inputuriAutoMotoSiAmbarcatiuniTrotineteElectrice (){
    return [
    { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
    { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
    { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
    { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
    { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
    { tip: "number", eticheta: "Viteza maxima", id: "viteza_maxima", placeholder: "km/h" , class: "optional-input" },
    { tip: "number", eticheta: "Autonomie", id: "autonomie", placeholder: "km" , class: "optional-input" },
    { tip: "number", eticheta: "Greutate", id: "greutate", placeholder: "kg" , class: "optional-input" },
    { tip: "select", eticheta: "Tip roti", id: "tip_roti", optiuni: ["Pline", "Pneumatice"] },
    { tip: "select", eticheta: "Culoare", id: "culoare", optiuni: ["Negru", "Alb", "Gri", "Rosu", "Albastru", "Verde", "Galben", "Portocaliu", "Alta culoare"] , class: "optional-input" },
    { tip: "select", eticheta: "Stare", id: "stare", optiuni: ["Nou", "Utilizat"] },
    { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
    { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
    { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    { tip: "select", eticheta: "Livrare", id: "livrare", optiuni: ["Da", "Nu"] , class: "optional-input" },
    ];
  }

  function inputuriAutoMotoSiAmbarcatiuniAutoturisme (){
    return [
        { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
        { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
        { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
        { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
        { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
        { tip: "text", eticheta: "Serie sasiu (VIN)", id: "serie_sasiu", class: "optional-input"  },
        { tip: "number", eticheta: "An de fabricație", id: "an_fabricatie" , class: "optional-input" },
        { tip: "number", eticheta: "Capacitate motor cm3", id: "capacitate_motor" , class: "optional-input" },
        { tip: "number", eticheta: "Putere", id: "putere", placeholder: "CP" , class: "optional-input" },
        { tip: "select", eticheta: "Combustibil", id: "combustibil", optiuni: ["Benzina", "Diesel", "GPL", "Hibrid", "Electric"], class: "optional-input"  },
        { tip: "select", eticheta: "Caroserie", id: "caroserie", optiuni: ["Cabrio", "Berlina", "Coupe", "Pickup", "Hatchback", "Break", "Off-road", "Minibus", "Monovolum", "SUV"] , class: "optional-input" },
        { tip: "number", eticheta: "Rulaj", id: "rulaj", placeholder: "km" , class: "optional-input" },
        { tip: "select", eticheta: "Culoare", id: "culoare", optiuni: ["Alb", "Albastru", "Gri", "Maro", "Negru", "Rosu", "Verde", "Alta culoare"] , class: "optional-input" },
        { tip: "select", eticheta: "Cutie de viteze", id: "cutie_viteze", optiuni: ["Manuala", "Automata"] , class: "optional-input" },
        { tip: "select", eticheta: "Volan", id: "volan", optiuni: ["Partea stanga", "Partea dreapta"], class: "optional-input"  },
        { tip: "select", eticheta: "Inmatriculat/Neinmatriculat", id: "inmatriculare", optiuni: ["Inmatriculat", "Neinmatriculat"] , class: "optional-input" },
        { tip: "select", eticheta: "Primul proprietar", id: "primul_proprietar", optiuni: ["Da", "Nu"] },
        { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
        { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
        { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" },
    ];

  }

  function inputuriAutoMotoSiAmbarcatiuniAutoutilitare (){
    return [
      { tip: "text", eticheta: "Titlu", id: "titlu" , name: "titlu" },
      { tip: "textarea", eticheta: "Descriere", id: "descriere", name: "descriere"  },
      { tip: "file", eticheta: "Imagini", id: "imagini", name: "imagini[]", accept: "image/*", multiple: true, maxImagini: 8 },
      { tip: "number", eticheta: "Preț", id: "pret", name: "pret" },
      { tip: "select", eticheta: "Monedă", id: "moneda", name: "moneda",  optiuni: ["Lei", "€"] },
      { tip: "select", eticheta: "Vânzător (acest camp nu va mai fi disponibil dupa primul anunt adaugat.)", id: "vanzator", optiuni: ["Persoana fizica", "Firma"] },
      { tip: "number", eticheta: "An de fabricație", id: "an_fabricatie", class: "optional-input"  },
      { tip: "number", eticheta: "Rulaj", id: "rulaj", placeholder: "km" , class: "optional-input" },
      { tip: "number", eticheta: "Putere", id: "putere", placeholder: "CP" , class: "optional-input" },
      { tip: "number", eticheta: "Capacitate motor cm3", id: "capacitate_motor" , class: "optional-input" },
      { tip: "select", eticheta: "Cutie de viteze", id: "cutie_viteze", optiuni: ["Manuala", "Automata"] , class: "optional-input" },
      { tip: "select", eticheta: "Sarcina utilă", id: "sarcina_utila", optiuni: ["0,001 - 2,8t", "2,801 - 3.5t", "3,501 - 7.5t"] , class: "optional-input" },
      { tip: "number", eticheta: "Masa maximă admisă", id: "masa_maxima_admisa", placeholder: "kg" , class: "optional-input" },
      { tip: "select", eticheta: "Norma de poluare", id: "norma_poluare", optiuni: ["Non-Euro", "Euro 1", "Euro 2", "Euro 3", "Euro 4", "Euro 5", "Euro 6"] , class: "optional-input" },
      { tip: "select", eticheta: "Locație", id: "locatie", name: "locatie" },
      { tip: "tel", eticheta: "Număr de telefon", id: "numarTelefon", name: "NumarTelefon" }
    ];
  }


function genereazaInputuri() {
  const categorie = caleCurenta[0].nume;
  const subcategorie = caleCurenta[1].nume;
  const subcategorie2 = caleCurenta[2]?.nume;

  if (categorie === "Prestari servicii") {
    return inputuriPrestariServicii();
  }

  if (categorie === "Locuri de munca") {
    return inputuriLocuriDeMunca();
  }

  if (categorie === "Agro si industrie" && subcategorie === "Echipamente si articole zootehnie") {
    return inputuriAgroSiIndustrieEchipamenteSiArticoleZootehnie();
  }

  if (categorie === "Auto, moto și ambarcațiuni" && subcategorie === "Autoutilitare") {
    return inputuriAutoMotoSiAmbarcatiuniAutoutilitare ()
  }


  if (categorie === "Agro si industrie" && subcategorie === "Cereale - Plante - Pomi") {
    return inputuriAgroSiIndustrieCerealePlantePomi ()
  }

  if (categorie === "Agro si industrie" && subcategorie === "Produse piata - Alimentatie") {
    return inputuriAgroSiIndustrieProdusePiataAlimentatie ()
  }

  if (categorie === "Agro si industrie" && subcategorie === "Utilaje agricole si industriale") {
    return inputuriAgroSiIndustrieUtilajeAgricoleSiIndustriale ()
  }

  if (categorie === "Agro si industrie" && subcategorie === "Animale domestice si pasari") {
    return inputuriAgroSiIndustrieAnimaleDomesticeSiPasari ()
  }

  if (categorie === "Animale de companie" && subcategorie === "Hrana") {
    return inputuriAnimaleDeCompanieHrana ()
  }

  if (categorie === "Animale de companie" && subcategorie === "Accesorii") {
    return inputuriAnimaleDeCompanieAccesorii ()
  }

  if (categorie === "Animale de companie" && subcategorie === "Pisici") {
    return inputuriAnimaleDeCompaniePisici ()
  }

  if (categorie === "Animale de companie" && subcategorie === "Caini") {
    return inputuriAnimaleDeCompanieCaini ()
  }

  if (categorie === "Sport si timp liber" && subcategorie === "Articole si echipamente sportive") {
    return inputuriSportSiTimpLiberArticoleSiEchipamenteSportive ()
  }

  if (categorie === "Sport si timp liber" && subcategorie === "Role") {
    return inputuriSportSiTimpLiberRole ()
  }

  if (categorie === "Sport si timp liber" && subcategorie === "Biciclete") {
    return inputuriSportSiTimpLiberBiciclete ()
  }

  if (categorie === "Sport si timp liber" && subcategorie === "Arta - Obiecte de colectie") {
    return inputuriSportSiTimpLiberArtaObiecteDeColectie ()
  }

  if (categorie === "Sport si timp liber" && subcategorie === "Instrumente muzicale") {
    return inputuriSportSiTimpLiberInstrumenteMuzicale ()
  }

  if (categorie === "Sport si timp liber" && subcategorie === "Altele") {
    return inputuriSportSiTimpLiberAltele ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Unisex"  && subcategorie2 === "Haine") {
    return inputuriModaSiFrumuseteUnisex ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Femei"  && subcategorie2 === "Haine") {
    return inputuriModaSiFrumuseteFemei ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Barbati"  && subcategorie2 === "Haine") {
    return inputuriModaSiFrumuseteBarbati ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Unisex"  && subcategorie2 === "Incaltaminte") {
    return inputuriModaSiFrumuseteUnisexIncaltaminte ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Femei"  && subcategorie2 === "Incaltaminte") {
    return inputuriModaSiFrumuseteFemeiIncaltaminte ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Barbati"  && subcategorie2 === "Incaltaminte") {
    return inputuriModaSiFrumuseteBarbatiIncaltaminte ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Unisex"  && subcategorie2 === "Curele si brauri") {
    return inputuriModaSiFrumuseteUnisexCureleSiBrauri ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Femei"  && subcategorie2 === "Curele si brauri") {
    return inputuriModaSiFrumuseteFemeiCureleSiBrauri ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Barbati"  && subcategorie2 === "Curele si brauri") {
    return inputuriModaSiFrumuseteBarbatiCureleSiBrauri ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Unisex"  && subcategorie2 === "Portofele si borsete") {
    return inputuriModaSiFrumuseteUnisexPortofeleSiBorsete ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Femei"  && subcategorie2 === "Portofele si borsete") {
    return inputuriModaSiFrumuseteFemeiPortofeleSiBorsete ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Barbati"  && subcategorie2 === "Portofele si borsete") {
    return inputuriModaSiFrumuseteBarbatiPortofeleSiBorsete ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Unisex"  && subcategorie2 === "Rucsacuri - Genti - Ghiozdane") {
    return inputuriModaSiFrumuseteUnisexRucsacuriGentiGhiozdane ()
  }


  if (categorie === "Moda si frumusete" && subcategorie === "Femei"  && subcategorie2 === "Rucsacuri - Genti - Ghiozdane") {
    return inputuriModaSiFrumuseteFemeiRucsacuriGentiGhiozdane ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Barbati"  && subcategorie2 === "Rucsacuri - Genti - Ghiozdane") {
    return inputuriModaSiFrumuseteBarbatiRucsacuriGentiGhiozdane ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Unisex"  && subcategorie2 === "Ochelari") {
    return inputuriModaSiFrumuseteUnisexOchelari ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Barbati"  && subcategorie2 === "Ochelari") {
    return inputuriModaSiFrumuseteBarbatiOchelari ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Femei"  && subcategorie2 === "Ochelari") {
    return inputuriModaSiFrumuseteFemeiOchelari ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Barbati"  && subcategorie2 === "Bijuterii") {
    return inputuriModaSiFrumuseteBarbatiBijuterii ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Unisex"  && subcategorie2 === "Bijuterii") {
    return inputuriModaSiFrumuseteUnisexBijuterii ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Femei"  && subcategorie2 === "Bijuterii") {
    return inputuriModaSiFrumuseteFemeiBijuterii ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Barbati" && subcategorie2 === "Manusi") {
    return inputuriModaSiFrumuseteBarbatiManusi ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Femei" && subcategorie2 === "Manusi") {
    return inputuriModaSiFrumuseteFemeiManusi ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Unisex" && subcategorie2 === "Manusi") {
    return inputuriModaSiFrumuseteUnisexManusi ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Unisex" && subcategorie2 === "Altele") {
    return inputuriModaSiFrumuseteUnisexAltele ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Femei" && subcategorie2 === "Altele") {
    return inputuriModaSiFrumuseteFemeiAltele ()
  }

  if (categorie === "Moda si frumusete" && subcategorie === "Barbati" && subcategorie2 === "Altele") {
    return inputuriModaSiFrumuseteBarbatiAltele ()
  }


  if (categorie === "Mama si copil" && subcategorie === "Haine - Incaltaminte") {
    return inputuriMamaSiCopilHaineIncaltaminte ()
  }

  if (categorie === "Mama si copil") {
    return inputuriMamaSiCopil ()
  }

  if (categorie === "Casa si gradina") {
    return inputuriCasaSiGradina ()
  }

  if (categorie === "Electronice si electrocasnice" && subcategorie === "Alte Electronice") {
    return inputuriElectroniceSiElectrocasniceAlteElectronice ()
  }

  if (categorie === "Electronice si electrocasnice" && subcategorie === "Piese - Accesorii - Periferice") {
    return inputuriElectroniceSiElectrocasnicePieseAccesoriiPeriferice ()
  }

  if (categorie === "Electronice si electrocasnice" && subcategorie === "Aparate medicale") {
    return inputuriElectroniceSiElectrocasniceAparateMedicale ()
  }

  if (categorie === "Electronice si electrocasnice" && subcategorie === "Videoproiectoare") {
    return inputuriElectroniceSiElectrocasniceVideoproiectoare ()
  }

  if (categorie === "Electronice si electrocasnice" && subcategorie === "Retelistica - Servere") {
    return inputuriElectroniceSiElectrocasniceRetelisticaServere ()
  }

  if (categorie === "Electronice si electrocasnice" && subcategorie === "Ingrijire personala") {
    return inputuriElectroniceSiElectrocasniceIngrijirePersonala ()
  }
  
  if (categorie === "Electronice si electrocasnice" && subcategorie === "Gps - Sisteme de navigatie") {
    return inputuriElectroniceSiElectrocasniceGpsSistemeDeNavigatie ()
  }

  if (categorie === "Electronice si electrocasnice" && subcategorie === "Ceasuri") {
    return inputuriElectroniceSiElectrocasniceCeasuri ()
  }

  if (categorie === "Electronice si electrocasnice" && subcategorie === "Drone") {
    return inputuriElectroniceSiElectrocasniceDrone ()
  }
  
  if (categorie === "Electronice si electrocasnice" && subcategorie === "Imprimante - Scanere") {
    return inputuriElectroniceSiElectrocasniceImprimanteScanere ()
  }

  if (categorie === "Electronice si electrocasnice" && subcategorie === "Tv - Audio - Foto - Video") {
    return inputuriElectroniceSiElectrocasniceTvAudioFotoVideo ()
  }

  if (categorie === "Electronice si electrocasnice" && subcategorie === "Electrocasnice") {
    return inputuriElectroniceSiElectrocasniceElectrocasnice ()
  }

  if (categorie === "Electronice si electrocasnice" && subcategorie === "Monitoare") {
    return inputuriElectroniceSiElectrocasniceMonitoare ()
  }

  if (categorie === "Electronice si electrocasnice" && subcategorie === "Calculatoare") {
    return inputuriElectroniceSiElectrocasniceCalculatoare ()
  }

  if (categorie === "Electronice si electrocasnice" && subcategorie === "Laptopuri") {
    return inputuriElectroniceSiElectrocasniceLaptopuri ()
  }

  if (categorie === "Electronice si electrocasnice" && subcategorie === "Tablete") {
    return inputuriElectroniceSiElectrocasniceTablete ()
  }

  if (categorie === "Electronice si electrocasnice" && subcategorie === "Telefoane") {
    return inputuriElectroniceSiElectrocasniceTelefoane ()
  }

    if (categorie === "Imobiliare" && subcategorie === "Alte proprietati sau spatii") {
    return inputuriImobiliareAlteProprietatiSauSpatii ()
  }

    if (categorie === "Imobiliare" && subcategorie === "Depozite - Hale") {
    return inputuriImobiliareDepoziteHale ()
  }

    if (categorie === "Imobiliare" && subcategorie === "Birouri - Spatii comerciale de vanzare") {
    return inputuriImobiliareBirouriSpatiiComercialeDeVanzare ()
  }

  if (categorie === "Imobiliare" && subcategorie === "Birouri - Spatii comerciale de inchiriat") {
    return inputuriImobiliareBirouriSpatiiComercialeDeInchiriat ()
  }

    if (categorie === "Imobiliare" && subcategorie === "Terenuri") {
    return inputuriImobiliareTerenuri ()
  }

  if (categorie === "Imobiliare" && subcategorie === "Case - Vile de inchiriat") {
    return inputuriImobiliareCaseVileDeInchiriat ()
  }

    if (categorie === "Imobiliare" && subcategorie === "Case - Vile de vanzare") {
    return inputuriImobiliareCaseVileDeVanzare ()
  }

    if (categorie === "Imobiliare" && subcategorie === "Apartamente - Garsoniere de vanzare") {
    return inputuriImobiliareApartamenteGarsoniereDeVanzare ()
  }

  if (categorie === "Imobiliare" && subcategorie === "Apartamente - Garsoniere de inchiriat") {
    return inputuriImobiliareApartamenteGarsoniereDeInchiriat ()
  }

    if (categorie === "Auto, moto și ambarcațiuni" && subcategorie === "Piese - Accesorii - Consumabile") {
    return inputuriAutoMotoSiAmbarcatiuniPieseAccesoriiConsumabile ()
  }

    if (categorie === "Auto, moto și ambarcațiuni" && subcategorie === "Roti - Jante - Anvelope" && subcategorie2 === "Roti") {
    return inputuriAutoMotoSiAmbarcatiuniRotiJanteAnvelopeRoti ()
  }

    if (categorie === "Auto, moto și ambarcațiuni" && subcategorie === "Roti - Jante - Anvelope" && subcategorie2 === "Anvelope") {
    return inputuriAutoMotoSiAmbarcatiuniRotiJanteAnvelopeAnvelope ()
  }

    if (categorie === "Auto, moto și ambarcațiuni" && subcategorie === "Roti - Jante - Anvelope" && subcategorie2 === "Jante") {
    return inputuriAutoMotoSiAmbarcatiuniRotiJanteAnvelopeJante ()
  }

  if (categorie === "Auto, moto și ambarcațiuni" && subcategorie === "Ambarcatiuni" || subcategorie === "Alte vehicule") {
    return inputuriAutoMotoSiAmbarcatiuniAmbarcatiuniAlteVehicule ()
  }
 
  if (categorie === "Auto, moto și ambarcațiuni" && subcategorie === "Camioane - Rulote - Remorci" && subcategorie2 === "Remorci") {
    return inputuriAutoMotoSiAmbarcatiuniCamioaneRuloteRemorciRemorci ()
  }

  if (categorie === "Auto, moto și ambarcațiuni" && subcategorie === "Camioane - Rulote - Remorci" && subcategorie2 === "Rulote") {
    return inputuriAutoMotoSiAmbarcatiuniCamioaneRuloteRemorciRulote ()
  }


  if (categorie === "Auto, moto și ambarcațiuni" && subcategorie === "Camioane - Rulote - Remorci" && subcategorie2 === "Camioane") {
    return inputuriAutoMotoSiAmbarcatiuniCamioaneRuloteRemorciCamioane ()
  }

  if (categorie === "Auto, moto și ambarcațiuni" && subcategorie === "Trotinete" && subcategorie2 === "Non-Electrice") {
    return inputuriAutoMotoSiAmbarcatiuniTrotineteNonElectrice ()
  }

  if (categorie === "Auto, moto și ambarcațiuni" && subcategorie === "Motociclete - Scutere - Atv") {
  return inputuriAutoMotoSiAmbarcatiuniMotocicleteScutereAtv ()
  }

  if (categorie === "Auto, moto și ambarcațiuni" && subcategorie === "Trotinete" && subcategorie2 === "Electrice") {
    return inputuriAutoMotoSiAmbarcatiuniTrotineteElectrice ()
  }

  if (categorie === "Auto, moto și ambarcațiuni" && subcategorie === "Autoturisme") {
    return inputuriAutoMotoSiAmbarcatiuniAutoturisme ()
  }

}


const judeteRomania = [
  "Alba", "Arad", "Arges", "Bacau", "Bihor", "Bistrita-Nasaud", "Botosani", "Braila",
  "Brasov", "Bucuresti", "Buzau", "Calarasi", "Caras-Severin", "Cluj", "Constanta",
  "Covasna", "Dambovita", "Dolj", "Galati", "Giurgiu", "Gorj", "Harghita", "Hunedoara",
  "Ialomita", "Iasi", "Ilfov", "Maramures", "Mehedinti", "Mures", "Neamt", "Olt",
  "Prahova", "Salaj", "Satu Mare", "Sibiu", "Suceava", "Teleorman", "Timis", "Tulcea",
  "Valcea", "Vaslui", "Vrancea"
];


const judeteSiOrase = {
  Alba: [
    "Abrud", "Aiud", "Alba Iulia", "Baia de Arieș", "Blaj", "Câmpeni", "Cugir", "Ocna Mureș", "Sebeș", "Teiuș", "Zlatna", "Alt oras"
  ],
  Arad: [
    "Arad", "Chișineu-Criș", "Curtici", "Ineu", "Lipova", "Nădlac", "Pâncota", "Sântana", "Sebiș", "Vladimirescu", "Alt oras"
  ],
  Arges: [
    "Pitești", "Câmpulung", "Curtea de Argeș", "Mioveni", "Ștefănești", "Topoloveni", "Alt oras"
  ],
  Bacau: [
    "Bacău", "Buhuși", "Comănești", "Dărmănești", "Moinești", "Onești", "Slănic-Moldova", "Târgu Ocna", "Alt oras"
  ],
  Bihor: [
    "Oradea", "Aleșd", "Beiuș", "Marghita", "Nucet", "Salonta", "Ștei", "Valea lui Mihai", "Alt oras"
  ],
  "Bistrita-Nasaud": [
    "Bistrița", "Beclean", "Năsăud", "Sângeorz-Băi", "Sânmartin", "Alt oras"
  ],
  Botosani: [
    "Botoșani", "Bucecea", "Dorohoi", "Flămânzi", "Ștefănești", "Alt oras"
  ],
  Braila: [
    "Brăila", "Făurei", "Ianca", "Însurăței", "Alt oras"
  ],
  Brasov: [
    "Brașov", "Codlea", "Făgăraș", "Ghimbav", "Predeal", "Râșnov", "Săcele", "Victoria", "Zărnești", "Alt oras"
  ],
  Bucuresti: [
    "Sector 1", "Sector 2", "Sector 3", "Sector 4", "Sector 5", "Sector 6"
  ],
  Buzau: [
    "Buzău", "Pătârlagele", "Râmnicu Sărat", "Alt oras"
  ],
  Calarasi: [
    "Călărași", "Budești", "Fundeni", "Lehliu Gară", "Oltenița", "Alt oras"
  ],
  "Caras-Severin": [
    "Reșița", "Anina", "Băile Herculane", "Bocșa", "Caransebeș", "Moldova Nouă", "Oravița", "Alt oras"
  ],
  Cluj: [
    "Cluj-Napoca", "Câmpia Turzii", "Dej", "Gherla", "Turda", "Alt oras"
  ],
  Constanta: [
    "Constanța", "Cernavodă", "Eforie", "Hârșova", "Mangalia", "Medgidia", "Năvodari", "Negru Vodă", "Ovidiu", "Techirghiol", "Alt oras"
  ],
  Covasna: [
    "Sfântu Gheorghe", "Baraolt", "Covasna", "Întorsura Buzăului", "Târgu Secuiesc", "Alt oras"
  ],
  Dambovita: [
    "Târgoviște", "Fieni", "Găești", "Moreni", "Pucioasa", "Răcari", "Titu", "Alt oras"
  ],
  Dolj: [
    "Craiova", "Băilești", "Bechet", "Calafat", "Dăbuleni", "Filiași", "Segarcea", "Alt oras"
  ],
  Galati: [
    "Galați", "Beresti", "Tecuci", "Târgu Bujor", "Alt oras"
  ],
  Giurgiu: [
    "Giurgiu", "Bolintin-Vale", "Mihăilești", "Alt oras"
  ],
  Gorj: [
    "Târgu Jiu", "Bumbești-Jiu", "Motru", "Novaci", "Rovinari", "Târgu Cărbunești", "Tismana", "Turdășeni", "Alt oras"
  ],
  Harghita: [
    "Miercurea Ciuc", "Bălan", "Borsec", "Cristuru Secuiesc", "Gheorgheni", "Odorheiu Secuiesc", "Praid", "Toplița", "Vlăhița", "Alt oras"
  ],
  Hunedoara: [
    "Deva", "Aninoasa", "Brad", "Călan", "Geoagiu", "Hațeg", "Hunedoara", "Lupeni", "Orăștie", "Petrila", "Petroșani", "Simeria", "Uricani", "Vulcan", "Alt oras"
  ],
  Ialomita: [
    "Amara", "Căzănești", "Fetesti", "Țăndărei", "Urziceni", "Alt oras"
  ],
  Iasi: [
    "Iași", "Hârlău", "Pașcani", "Podu Iloaiei", "Târgu Frumos", "Alt oras"
  ],
  Ilfov: [
    "Voluntari", "Bragadiru", "Buftea", "Chitila", "Măgurele", "Otopeni", "Pantelimon", "Alt oras"
  ],
  Maramures: [
    "Baia Mare", "Baia Sprie", "Borșa", "Cavnic", "Sighetu Marmației", "Târgu Lăpuș", "Vișeu de Sus", "Alt oras"
  ],
  Mehedinti: [
    "Drobeta-Turnu Severin", "Baia de Aramă", "Orșova", "Strehaia", "Vânju Mare", "Alt oras"
  ],
  Mures: [
    "Târgu Mureș", "Iernut", "Luduș", "Reghin", "Sighișoara", "Sovata", "Târnăveni", "Alt oras"
  ],
  Neamt: [
    "Piatra Neamț", "Bicaz", "Roman", "Roznov", "Târgu Neamț", "Alt oras"
  ],
  Olt: [
    "Slatina", "Bals", "Caracal", "Corabia", "Drăgănești-Olt", "Piatra-Olt", "Scornicești", "Alt oras"
  ],
  Prahova: [
    "Ploiești", "Azuga", "Băicoi", "Boldești-Scăeni", "Breaza", "Bușteni", "Câmpina", "Comarnic", "Plopeni", "Sinaia", "Slănic", "Urlați", "Vălenii de Munte" ,"Alt oras"
  ],
  "Satu Mare": [
    "Satu Mare", "Ardud", "Carei", "Livada", "Negrești-Oaș", "Tășnad", "Alt oras"
  ],
  Salaj: [
    "Zalău", "Cehu Silvaniei", "Jibou", "Șimleu Silvaniei", "Alt oras"
  ],
  Sibiu: [
    "Sibiu", "Agnita", "Avrig", "Cisnădie", "Dumbrăveni", "Mediaș", "Miercurea Sibiului", "Ocna Sibiului", "Săliște", "Alt oras"
  ],
  Suceava: [
    "Suceava", "Câmpulung Moldovenesc", "Fălticeni", "Gura Humorului", "Rădăuți", "Solca", "Vatra Dornei", "Alt oras"
  ],
  Teleorman: [
    "Alexandria", "Rosiorii de Vede", "Turnu Măgurele", "Videle", "Zimnicea", "Alt oras"
  ],
  Timis: [
    "Timișoara", "Buziaș", "Ciacova", "Deta", "Făget", "Gătaia", "Jimbolia", "Lugoj", "Sânnicolau Mare", "Alt oras"
  ],
  Tulcea: [
    "Tulcea", "Babadag", "Isaccea", "Măcin", "Sulina", "Alt oras"
  ],
  Valcea: [
    "Râmnicu Vâlcea", "Băbeni", "Bălcești", "Berbești", "Brezoi", "Călimănești", "Drăgășani", "Horezu", "Ocnele Mari", "Alt oras"
  ],
  Vaslui: [
    "Vaslui", "Bârlad", "Husi", "Negrești", "Alt oras"
  ],
  Vrancea: [
    "Focșani", "Adjud", "Mărășești", "Odobești", "Panciu", "Alt oras"
  ]
};




function ascundeInputuri() {
  const inputContainer = document.getElementById("input-container");
  inputContainer.style.display = "none";
}


function afiseazaInputuri() {
  const inputuri = genereazaInputuri();
  const inputContainer = document.getElementById("input-container");
  inputContainer.innerHTML = "";

  // Adăugați această linie pentru a afișa din nou inputurile
  inputContainer.style.display = "block";

  for (const input of inputuri) {

    if (input.tip !== "file") {
    const label = document.createElement("label");
    label.innerText = input.eticheta;
    label.htmlFor = input.id;
    inputContainer.appendChild(label);
    }

    let campInput;

    if (input.tip === "select") {
      campInput = document.createElement("select");
      campInput.id = input.id;
      campInput.name = input.id;

      const placeholderOption = document.createElement("option");
      placeholderOption.value = "";
      placeholderOption.textContent = "Selectează";
      placeholderOption.disabled = true;
      placeholderOption.selected = true;
      placeholderOption.hidden = true;

      if (input.id === "locatie") {
        placeholderOption.textContent = "Selectează județul";
      } else {
        placeholderOption.textContent = "Selectează";
      }

      campInput.appendChild(placeholderOption);

      if (input.id === "locatie") {
        input.optiuni = judeteRomania;
        campInput.addEventListener("change", (e) => {
          const judet = e.target.value;
          const orase = judeteSiOrase[judet];

          const orasSelect = document.getElementById("oras");
          if (orasSelect) {
            orasSelect.remove();
          }

          if (orase) {
            const orasInput = document.createElement("select");
            orasInput.id = "oras";
            orasInput.name = "oras";

            const placeholderOption = document.createElement("option");
            placeholderOption.value = "";
            placeholderOption.textContent = "Selectează orașul";
            placeholderOption.disabled = true;
            placeholderOption.selected = true;
            placeholderOption.hidden = true;
            orasInput.appendChild(placeholderOption);

            for (const oras of orase) {
              const optionElement = document.createElement("option");
              optionElement.value = oras;
              optionElement.textContent = oras;
              orasInput.appendChild(optionElement);
            }

            inputContainer.insertBefore(orasInput, campInput.nextSibling.nextSibling);
          }
        });
      }


      if (Array.isArray(input.optiuni)) {
        for (const optiune of input.optiuni) {
          const optionElement = document.createElement("option");

          if (typeof optiune === "object") {
            optionElement.value = optiune.valoare;
            optionElement.textContent = optiune.text;
          } else {
            optionElement.value = optiune;
            optionElement.textContent = optiune;
          }

          campInput.appendChild(optionElement);
        }
      } else {
        console.error("input.optiuni nu este un array pentru", input);
      }
      inputContainer.appendChild(campInput);
    } else if (input.tip === "file") {
      handleFileInput(input, inputContainer);

      // Adăugați aceste linii aici:
      const imageContainers = [];

      for (let i = 0; i < 8; i++) {
      const imageContainer = document.createElement("div");
      imageContainer.className = "image-container";
      imageContainer.innerHTML = "+";
      imageContainer.style.width = "100px";
      imageContainer.style.height = "100px";
      imageContainer.style.border = "1px solid #ccc";
      imageContainer.style.display = "inline-block";
      imageContainer.style.margin = "5px";
      imageContainer.style.textAlign = "center";
      imageContainer.style.lineHeight = "100px";
      imageContainer.style.cursor = "pointer";
      inputContainer.appendChild(imageContainer);
      imageContainers.push(imageContainer);
    }

      handleImageContainerClick(inputContainer, imageContainers);

    } else {
      
      if (input.id === "descriere") {
        campInput = document.createElement("textarea");
        campInput.rows = 15;
        campInput.style.width = "98%";
        campInput.style.resize = "none";
      } else {
        campInput = document.createElement("input");
        campInput.type = input.tip;
      }
      campInput.name = input.name;
      campInput.id = input.id;
      if (input.placeholder) {
        campInput.placeholder = input.placeholder;
    }
    inputContainer.appendChild(campInput);
}

// Adaugă un element <br> după fiecare input
let br = document.createElement("br");
inputContainer.appendChild(br);
}



// Selectați formularul în funcție de ID-ul său sau de alt selector potrivit
if (inputuri.length > 0) {
  const butonAdaugaAnunt = document.createElement("button");
  butonAdaugaAnunt.type = "submit";
  butonAdaugaAnunt.innerText = "Adaugă anunț";
  butonAdaugaAnunt.id = "buton_adauga_anunt";
  inputContainer.appendChild(butonAdaugaAnunt);

  // Adăugați gestionarul de evenimente aici
  butonAdaugaAnunt.addEventListener("click", handleFormSubmit);
}

}