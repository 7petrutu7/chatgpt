window.onload = function() {
    fetch('get_announcements.php')
    .then(response => response.json())
    .then(data => {
        // Actualizez numerele sub fiecare buton
        document.querySelector('#active-btn a').innerHTML = `Active <br>${data.activ}`;
        document.querySelector('#in-asteptare-btn a').innerHTML = `In asteptare <br>${data.in_asteptare}`;
        document.querySelector('#moderat-btn a').innerHTML = `Moderate <br>${data.moderat}`;
        document.querySelector('#dezactivat-btn a').innerHTML = `Dezactivate <br>${data.dezactivat}`;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
