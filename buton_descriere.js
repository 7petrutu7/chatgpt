// Adăugăm evenimentul de click pentru butonul 'Vezi toată descrierea'
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('vezi-descriere-btn')) {
        const button = event.target;
        const description = button.dataset.fullDescription;
        const parentElement = button.parentElement;

        const descriptionElement = parentElement.querySelector('p');
        descriptionElement.textContent = description;

        parentElement.removeChild(button);
    }
});

