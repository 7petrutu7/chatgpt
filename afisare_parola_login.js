document.addEventListener('DOMContentLoaded', function () {
    const togglePasswordButton = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('parola');

    togglePasswordButton.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePasswordButton.src = 'assets/ochi-parola/eye.png';
        } else {
            passwordInput.type = 'password';
            togglePasswordButton.src = 'assets/ochi-parola/ochi.png';
        }
    });
});
