function handleRecaptchaResponse(responseText) {
    if (responseText === 'recaptcha_failed') {
        alert('Eroare la verificarea reCAPTCHA. Vă rugăm să încercați din nou.');
        return false;
    } else {
        return true;
    }
}