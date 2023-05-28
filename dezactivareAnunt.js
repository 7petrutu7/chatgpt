// dezactivareAnunt.js

document.addEventListener('DOMContentLoaded', function() {
    const confirmDialog = document.getElementById('confirmDialog');
    const confirmButton = document.getElementById('confirmYes');
    const cancelButton = document.getElementById('confirmNo');
    const noAnunturiDiv = document.getElementById('noAnunturi');
    let toBeDisabledId = null;

    confirmButton.addEventListener('click', function() {
        if (toBeDisabledId !== null) {
            // Call a PHP function to disable the announcement
            fetch('disable_announcement.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({ 'id': toBeDisabledId })
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    // Remove the announcement from the page
                    const anuntDiv = document.querySelector('.anunt_' + toBeDisabledId);
                    anuntDiv.parentNode.removeChild(anuntDiv);

                    // Decrease the announcement count
                    let nrAnunturiElem = document.getElementById('nrAnunturi');
                    nrAnunturiElem.textContent = Number(nrAnunturiElem.textContent) - 1;

                    // If no more announcements, show the message
                    if (Number(nrAnunturiElem.textContent) === 0) {
                        noAnunturiDiv.style.display = 'flex';
                    }

                    // Hide the confirmation dialog
                    confirmDialog.style.display = 'none';
                    toBeDisabledId = null;
                } else {
                    alert('Nu a putut fi dezactivat anunțul. Te rog încearcă din nou.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    });

    cancelButton.addEventListener('click', function() {
        confirmDialog.style.display = 'none';
        toBeDisabledId = null;
    });

    document.getElementById('anunturiContainer').addEventListener('click', function(e) {
        let target = e.target;

        // If the target is the span, change it to the button
        if (target.tagName === 'SPAN') {
            target = target.parentElement;
        }

        if (target.tagName === 'BUTTON' && target.id.startsWith('disableBtn_')) {
            const id = target.id.split('_')[1];
            confirmDialog.style.display = 'block';
            toBeDisabledId = id;
        }
    });
});
