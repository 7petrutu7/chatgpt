window.addEventListener('pageshow', function (event) {
    if (event.persisted) {
        document.querySelector('form').reset();
    }

    if (typeof grecaptcha !== 'undefined') {
        grecaptcha.reset();
    }
});
