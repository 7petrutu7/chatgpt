function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

document.addEventListener('DOMContentLoaded', function() {
    const userId = getURLParameter('user_id');

    fetch(`anunturi-utilizator.php?user_id=${userId}`)
        .then(response => response.json())
        .then(data => {
            const anunturiContainer = document.getElementById('anunturi-container');
            data.forEach(anunt => {
                const anuntElement = createAnuntElement(anunt);
                if (anuntElement) {
                    anunturiContainer.appendChild(anuntElement);
                }
            });

            // Afișează numărul de anunțuri și mesajul corespunzător
            const numarAnunturiElement = document.getElementById('numar-anunturi');
            const numarAnunturi = data.length;
            if (numarAnunturi === 0) {
                numarAnunturiElement.textContent = 'Utilizatorul nu are niciun anunț activ.';
            } else if (numarAnunturi === 1) {
                numarAnunturiElement.textContent = '1 anunț activ.';
            } else {
                numarAnunturiElement.textContent = numarAnunturi + ' anunțuri active.';
            }
        })
        .catch(error => {
            console.error('A apărut o eroare:', error);
        });
});

function createAnuntElement(anunt) {
    const anuntElement = document.createElement('div');
    anuntElement.classList.add('anunt');

    const imgElement = document.createElement('img');
    imgElement.src = `assets/imagini_anunturi/${anunt.img1}`;
    imgElement.alt = anunt.titlu;
    anuntElement.appendChild(imgElement);

    const titleElement = document.createElement('h3');
    titleElement.textContent = anunt.titlu;
    anuntElement.appendChild(titleElement);

    const priceElement = document.createElement('p');
    priceElement.textContent = `Pret: ${anunt.pret} ${anunt.moneda}`;
    anuntElement.appendChild(priceElement);

    const userElement = document.createElement('p');
    userElement.textContent = `Utilizator: ${anunt.nume}`;
    anuntElement.appendChild(userElement);

    const phoneElement = document.createElement('p');
    phoneElement.textContent = `Telefon: ${anunt.telefon}`;
    anuntElement.appendChild(phoneElement);

    const idElement = document.createElement('p');
    idElement.textContent = `ID Anunt: ${anunt.id_anunt}`;
    anuntElement.appendChild(idElement);

    const idUtilizator = document.createElement('p');
    idUtilizator.textContent = `ID utilizator: ${anunt.id_utilizator}`;
    anuntElement.appendChild(idUtilizator);

    const dateElement = document.createElement('p');
    dateElement.textContent = `Data adaugarii: ${anunt.data_adaugarii}`;
    anuntElement.appendChild(dateElement);
    

    return anuntElement;
}

