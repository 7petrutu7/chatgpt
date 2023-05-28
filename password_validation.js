document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');
  const passwordInput = document.getElementById('parola');
  const passwordErrorMessageEmpty = document.getElementById('parola-error-message-empty');

  passwordInput.addEventListener('input', function () {
    passwordErrorMessageEmpty.innerText = '';
  });

  loginForm.addEventListener('submit', function (event) {
    if (passwordInput.value.trim() === '') {
      event.preventDefault();
      passwordErrorMessageEmpty.innerText = 'Vă rugăm să completați acest câmp.';
    } else {
      passwordErrorMessageEmpty.innerText = '';
    }
  });
});
