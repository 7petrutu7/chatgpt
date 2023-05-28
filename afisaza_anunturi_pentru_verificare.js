function updateNumarAnunturiAsteptare() {
    fetch('get_anunturi_in_asteptare.php')
        .then(response => response.json())
        .then(data => {
            const numarAnunturiAsteptareElement = document.getElementById('numar-anunturi-asteptare');
            const numarAnunturiAsteptare = data.length;

            if (numarAnunturiAsteptare === 0) {
                numarAnunturiAsteptareElement.textContent = 'Nu există anunțuri în așteptare.';
            } else {
                numarAnunturiAsteptareElement.textContent = 
                    numarAnunturiAsteptare === 1 ? 
                    '1 anunț în așteptare.' : 
                    `${numarAnunturiAsteptare} anunțuri în așteptare.`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


document.addEventListener("DOMContentLoaded", function () {
    fetch('get_anunturi_in_asteptare.php')
        .then(response => response.json())
        .then(data => {
            const anunturiContainer = document.getElementById('anunturi-container');
            
            updateNumarAnunturiAsteptare(data.length);

            if (data.length > 0) {
                data.forEach(anunt => {
                    const anuntElement = createAnuntElement(anunt);
                    anunturiContainer.appendChild(anuntElement);
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}); 


function createAnuntElement(anunt) {
    const anuntElement = document.createElement('div');
    anuntElement.classList.add('anunt');
    anuntElement.dataset.userId = anunt.id_utilizator; // Adăugăm ID-ul utilizatorului ca un atribut de date al elementului anunț

    // Prima imagine
    const imgElement = document.createElement('img');
    imgElement.src = `assets/imagini_anunturi/${anunt.img1}`;
    imgElement.alt = anunt.titlu;
    anuntElement.appendChild(imgElement);

    // A doua imagine (dacă există)
    if (anunt.img2 !== 'nedefinit') {
        const img2Element = document.createElement('img');
        img2Element.src = `assets/imagini_anunturi/${anunt.img2}`;
        img2Element.alt = anunt.titlu;
        anuntElement.appendChild(img2Element);
    }

    // A treia imagine (dacă există)
    if (anunt.img3 !== 'nedefinit') {
        const img3Element = document.createElement('img');
        img3Element.src = `assets/imagini_anunturi/${anunt.img3}`;
        img3Element.alt = anunt.titlu;
        anuntElement.appendChild(img3Element);
    }

    const titleElement = document.createElement('h3');
    titleElement.textContent = anunt.titlu;
    anuntElement.appendChild(titleElement);

    const descriptionElement = document.createElement('p');
    const shortDescription = anunt.descriere.substring(0, 100); // Primele 100 de caractere
    descriptionElement.textContent = shortDescription + (anunt.descriere.length > 100 ? '...' : ''); // Adăugăm '...' dacă descrierea are mai mult de 100 de caractere
    anuntElement.appendChild(descriptionElement);

    if (anunt.descriere.length > 100) {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = 'Vezi toată descrierea';
        buttonElement.classList.add('vezi-descriere-btn');
        buttonElement.dataset.fullDescription = anunt.descriere; // Stocăm întreaga descriere într-un atribut de date
        anuntElement.appendChild(buttonElement);
    }

    const priceElement = document.createElement('p');
    priceElement.textContent = `Preț: ${anunt.pret} ${anunt.moneda}`;
    anuntElement.appendChild(priceElement);

    const userElement = document.createElement('p');
    userElement.textContent = `Utilizator: ${anunt.nume}`;
    anuntElement.appendChild(userElement);

    const viewAnunturiBtn = document.createElement('button');
    viewAnunturiBtn.textContent = 'Vezi toate anunțurile utilizatorului';
    viewAnunturiBtn.classList.add('vezi-anunturi-btn');
    viewAnunturiBtn.dataset.userId = anunt.id_utilizator; // Stocăm ID-ul utilizatorului într-un atribut de date
    anuntElement.appendChild(viewAnunturiBtn);

    viewAnunturiBtn.addEventListener('click', function() {
        const userId = this.dataset.userId;
        // Redirecționează către pagina cu toate anunțurile utilizatorului specificat
        window.location.href = `anunturi-utilizator.html?user_id=${userId}`;
    });

    const phoneElement = document.createElement('p');
    phoneElement.textContent = `Telefon: ${anunt.telefon}`;
    anuntElement.appendChild(phoneElement);

    const idElement = document.createElement('p');
    idElement.textContent = `ID Anunț: ${anunt.id_anunt}`;
    anuntElement.appendChild(idElement);

    const idUtilizator = document.createElement('p');
    idUtilizator.textContent = `ID Utilizator: ${anunt.id_utilizator}`;
    anuntElement.appendChild(idUtilizator);

    const dateElement = document.createElement('p');
    dateElement.textContent = `Data adăugării: ${anunt.data_adaugarii}`;
    anuntElement.appendChild(dateElement);

    // Obținem numărul de anunțuri active ale utilizatorului
fetch(`numar-anunturi-active.php?user_id=${anunt.id_utilizator}`)
    .then(response => response.json())
    .then(data => {
        const numarAnunturiActive = data.numar_anunturi_active;

        const numarAnunturiActiveElement = document.createElement('p');
        numarAnunturiActiveElement.id = `numar-anunturi-active-${anunt.id_utilizator}`;  // ID unic
        numarAnunturiActiveElement.textContent = `Număr anunțuri active: ${numarAnunturiActive}`;
        anuntElement.appendChild(numarAnunturiActiveElement);
    })
    .catch(error => {
        console.error('Error:', error);
    });

const approveButton = document.createElement('button');
approveButton.textContent = 'Aprobă';
approveButton.classList.add('aproba-btn');
approveButton.dataset.anuntId = anunt.id_anunt; // Stocăm ID-ul anunțului într-un atribut de date
anuntElement.appendChild(approveButton);

approveButton.addEventListener('click', function() {
    const anuntId = this.dataset.anuntId;
    const userId = anunt.id_utilizator;

    // Trimitem o cerere AJAX către server pentru a actualiza starea anunțului
    fetch(`actualizeaza-stare-anunt.php?anunt_id=${anuntId}&stare_anunt=activ`)
        .then(response => response.json())
        .then(data => {
            // Verificăm răspunsul de la server pentru succes
            if (data.success) {
                // Eliminăm anunțul din pagină
                this.parentNode.remove();

                // Actualizăm numărul de anunțuri în așteptare
                updateNumarAnunturiAsteptare();

                // Actualizăm numărul de anunțuri active ale utilizatorului
                fetch(`numar-anunturi-active.php?user_id=${userId}`)
                    .then(response => response.json())
                    .then(data => {
                        const numarAnunturiActive = data.numar_anunturi_active;
                        const numarAnunturiActiveElement = document.getElementById(`numar-anunturi-active-${userId}`);
                        
                        if(numarAnunturiActiveElement) {
                            numarAnunturiActiveElement.textContent = `Număr anunțuri active: ${numarAnunturiActive}`;
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            } else {
                console.error('Actualizarea stării anunțului a eșuat.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});


const moderateButton = document.createElement('button');
moderateButton.textContent = 'Moderează';
moderateButton.classList.add('modera-btn');
moderateButton.dataset.anuntId = anunt.id_anunt;
anuntElement.appendChild(moderateButton);

// Crearea input-ului pentru motiv
const motivInput = document.createElement('input');
motivInput.type = 'text';
motivInput.placeholder = 'Introduceți motivul';
motivInput.id = `motiv-input-${anunt.id_anunt}`;  // Adaugă un id unic pentru fiecare input de motiv
anuntElement.appendChild(motivInput);

moderateButton.addEventListener('click', function() {
    const anuntId = this.dataset.anuntId;

    // Afișarea mesajului de confirmare
    if (!confirm(`Ești sigur că vrei să moderezi anunțul cu titlul "${anunt.titlu}"?`)) {
        // Dacă utilizatorul a apăsat pe "Cancel", întrerupem execuția funcției
        return;
    }

    const motivInput = document.getElementById(`motiv-input-${anuntId}`);
    let motiv = motivInput.value;

    // Dacă inputul este gol, setăm motivul la 'nedefinit'
    if (!motiv) {
        motiv = 'nedefinit';
    }

    // Trimitem o cerere AJAX către server pentru a modera anunțul și a avertiza utilizatorul
    fetch(`modereaza-anunt.php?anunt_id=${anuntId}&motiv=${motiv}`)
        .then(response => response.json())
        .then(data => {
            // Verificăm răspunsul de la server pentru succes
            if (data.success) {
                // Eliminăm anunțul din pagină
                this.parentNode.remove();

                // Actualizăm numărul de anunțuri în așteptare
                updateNumarAnunturiAsteptare();
            } else {
                console.error('Moderea anunțului a eșuat.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

const blockUserButton = document.createElement('button');
blockUserButton.textContent = 'Blochează utilizator';
blockUserButton.classList.add('blocheaza-utilizator-btn');
blockUserButton.dataset.userId = anunt.id_utilizator; 
anuntElement.appendChild(blockUserButton);

blockUserButton.addEventListener('click', function() {
    const userId = this.dataset.userId;

    // Afișarea mesajului de confirmare
    if (!confirm(`Ești sigur că vrei să blochezi utilizatorul cu ID-ul "${userId}"?`)) {
        // Dacă utilizatorul a apăsat pe "Cancel", întrerupem execuția funcției
        return;
    }

    fetch(`blocheaza_utilizator_pentru_anunt.php?user_id=${userId}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Îndepărtează toate anunțurile utilizatorului din pagină
                const allUserAnuntElements = document.querySelectorAll(`.anunt[data-user-id="${userId}"]`);
                allUserAnuntElements.forEach(anuntElement => anuntElement.remove());

                // Actualizăm numărul de anunțuri în așteptare
                updateNumarAnunturiAsteptare();
            } else {
                console.error('Blocarea utilizatorului a eșuat.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});


    return anuntElement;
}
