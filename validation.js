const form = document.querySelector('form');
const inputFields = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
const errorMessages = document.querySelectorAll('.error-message');
const termsCheckbox = document.querySelector('input[type="checkbox"]');
const termsMessage = document.getElementById('termeni-message');
const numeInput = document.getElementById('nume');
const numeMessage = document.getElementById('nume-message');
const passwordInput = document.getElementById('parola');
const confirmPasswordInput = document.getElementById('confirma_parola');
const passwordMessage = document.getElementById('parola-message');
const confirmPasswordMessage = document.getElementById('confirma_parola-message');
const emailInput = document.getElementById('email');
const emailMessage = document.getElementById('email-message');
const emailCustomMessage = document.getElementById('email-custom-message'); // Adăugați acest rând


function validateInput(input, errorMessage) {
    if (input.value === '') {
        errorMessage.innerText = 'Va rugam sa completati acest camp.';
        return false;
    } else {
        errorMessage.innerText = '';
        return true;
    }
}

function validateEmail(input, errorMessage) {
    if (input.value === '') {
        errorMessage.innerText = 'Va rugam sa completati acest camp.';
        emailCustomMessage.style.display = 'none';
        return false;
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
            errorMessage.innerText = '';
            emailCustomMessage.innerText = 'Va rugam sa introduceti o adresa de email valida. Aceasta trebuie sa includa symbolul @ si .';
            emailCustomMessage.style.display = 'block';
            return false;
        } else {
            errorMessage.innerText = '';
            emailCustomMessage.style.display = 'none';
            return true;
        }
    }
}

function validatePassword(input, errorMessage) {
    const passwordRegex = /^(?=.*\d)[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;

    if (input.value === '') {
        errorMessage.innerText = 'Va rugam sa completati acest camp.';
        return false;
    } else if (!passwordRegex.test(input.value)) {
        errorMessage.innerText = 'Parola trebuie sa contina 6 caractere si cel putin 1 numar.';
        return false;
    } else {
        errorMessage.innerText = '';
        return true;
    }
}

function validateConfirmPassword(passwordInput, confirmPasswordInput, errorMessage) {
    if (confirmPasswordInput.value === '') {
        errorMessage.innerText = 'Va rugam sa completati acest camp.';
        return false;
    } else if (passwordInput.value !== confirmPasswordInput.value) {
        errorMessage.innerText = 'Parolele nu coincid.';
        return false;
    } else {
        errorMessage.innerText = '';
        return true;
    }
}


function validateCheckbox(checkbox, errorMessage) {
    if (!checkbox.checked) {
        errorMessage.innerText = 'Trebuie sa fiti de acord cu termenii si conditiile site-ului precum si cu politica de confidentialitate.';
        return false;
    } else {
        errorMessage.innerText = '';
        return true;
    }
}

// Nume input
numeInput.addEventListener('input', function () {
    validateInput(this, numeMessage);
});

// Email input
emailInput.addEventListener('input', function () {
    if (this.value === '') {
        emailMessage.innerText = 'Va rugam sa completati acest camp.';
        emailCustomMessage.style.display = 'none';
    } else {
        emailMessage.innerText = '';
        emailCustomMessage.style.display = 'none';
    }
});

// Parola input
passwordInput.addEventListener('input', function () {
    validatePassword(this, passwordMessage);
    validateConfirmPassword(passwordInput, confirmPasswordInput, confirmPasswordMessage);
});

// Confirma parola input
confirmPasswordInput.addEventListener('input', function () {
    validateConfirmPassword(passwordInput, confirmPasswordInput, confirmPasswordMessage);
});

// Termeni input
termsCheckbox.addEventListener('change', function () {
    validateCheckbox(this, termsMessage);
});

form.addEventListener('submit', function (event) {
    let isValid = true;

    for (let i = 0; i < inputFields.length; i++) {
        const input = inputFields[i];
        const errorMessage = errorMessages[i];

        if (input.type === 'password' && input.id === 'parola') {
            if (!validatePassword(input, errorMessage)) {
                isValid = false;
            }
        } else if (input.type === 'password' && input.id === 'confirma_parola') {
            if (!validateConfirmPassword(passwordInput, confirmPasswordInput, errorMessage)) {
                isValid = false;
            }
        } else if (input.type === 'email') { // Adăugați această secțiune
            if (!validateEmail(input, errorMessage)) {
                isValid = false;
            }
        } else {
            if (!validateInput(input, errorMessage)) {
                isValid = false;
            }
        }
    }

    if (!validateCheckbox(termsCheckbox, termsMessage)) {
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    } else {
        const recaptchaResponse = grecaptcha.getResponse();
        if (recaptchaResponse.length === 0) {
            event.preventDefault();
            alert('Vă rugăm să completați reCAPTCHA pentru a dovedi că nu sunteți robot.');
        }
    }
});
