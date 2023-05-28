const loginLoginForm = document.getElementById('login-form');
const loginEmailInput = document.getElementById('email');
const loginPasswordInput = document.getElementById('parola');
const loginEmailErrorMessageEmpty = document.getElementById('email-error-message-empty');
const loginEmailErrorMessageInvalid = document.getElementById('email-error-message-invalid');
const loginPasswordErrorMessage = document.getElementById('password-error-message');
const loginParolaErrorMessageEmpty = document.getElementById('parola-error-message-empty');


function validateEmailInput(input, errorMessageEmpty, errorMessageInvalid) {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (input.value === '') {
    errorMessageEmpty.innerText = 'Vă rugăm să completați acest câmp.';
    errorMessageInvalid.innerText = '';
    return false;
  } else if (!emailRegex.test(input.value)) {
    errorMessageEmpty.innerText = '';
    errorMessageInvalid.innerText = 'Vă rugăm să introduceți o adresă de email validă.';
    return false;
  } else {
    errorMessageEmpty.innerText = '';
    errorMessageInvalid.innerText = '';
    return true;
  }
}

function validatePasswordInput(input, errorMessageEmpty) {
  if (input.value.trim() === '') {
    errorMessageEmpty.innerText = 'Vă rugăm să completați acest câmp.';
    return false;
  } else {
    errorMessageEmpty.innerText = '';
    return true;
  }
}

loginEmailInput.addEventListener('input', function () {
  loginEmailErrorMessageEmpty.innerText = '';
  loginEmailErrorMessageInvalid.innerText = '';
});

loginPasswordInput.addEventListener('input', function () {
  loginPasswordErrorMessage.innerText = '';
  loginParolaErrorMessageEmpty.innerText = '';
});

loginPasswordInput.addEventListener('blur', function () {
  validatePasswordInput(loginPasswordInput, loginParolaErrorMessageEmpty);
});

loginLoginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (!recaptchaResponseField.value) {
    alert("Vă rugăm să completați reCAPTCHA pentru a dovedi că nu sunteți un robot.");
    return;
  }

  if (!validateEmailInput(loginEmailInput, loginEmailErrorMessageEmpty, loginEmailErrorMessageInvalid)) {
    return;
  }

  if (loginPasswordInput.value.trim() === '') {
    loginParolaErrorMessageEmpty.innerText = 'Vă rugăm să completați acest câmp.';
    return;
  } else {
    loginParolaErrorMessageEmpty.innerText = '';
  }



  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText);
      if (response.status === 'success') {
        localStorage.setItem("user_name", response.user_name);
        window.location.href = 'dashboard.html';
      } else if (response.status === 'inactive') {
        window.location.href = response.redirect;
      } else if (response.status === 'blocked') {
        window.location.href = response.redirect;
      } else {
        if (response.message === 'Nu exista niciun cont asociat acestui email.') {
          loginEmailErrorMessageInvalid.innerText = response.message;
        } else {
          loginPasswordErrorMessage.innerText = response.message;
        }
      }
    }
  };

  xhttp.open("POST", "login.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(`email=${loginEmailInput.value}&parola=${loginPasswordInput.value}&g-recaptcha-response=${recaptchaResponseField.value}`);
});