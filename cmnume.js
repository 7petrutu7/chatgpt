document.addEventListener('DOMContentLoaded', () => {
        // Verificăm dacă există numele utilizatorului în stocarea locală
        if (localStorage.getItem('user_name')) {
            // Preiau numele utilizatorului și îl introduc în elementul HTML
            document.getElementById('user-name').textContent = localStorage.getItem('user_name');
        }
    });