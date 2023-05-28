const emailInput1 = document.getElementById('email');
const emailMessage2 = document.getElementById('email-message');
const submitButton = document.querySelector('button[type="submit"]');

emailInput1.addEventListener('input', function () {
    const email = this.value;

    if (email !== '') {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText === 'exists') {
                    emailMessage2.innerText = 'Aceasta adresa de email este deja inregistrata, va rugam sa va autentificati sau sa alegeti alta.';
                    submitButton.disabled = true;
                } else {
                    emailMessage2.innerText = '';
                    submitButton.disabled = false;
                }
            }
        };
        xhttp.open('POST', 'check_email.php', true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send(`email=${email}`);
    } else {
        emailMessage2.innerText = '';
        submitButton.disabled = false;
    }
});
