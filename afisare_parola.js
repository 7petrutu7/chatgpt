const togglePasswordButton = document.getElementById('toggle-password');
const toggleConfirmPasswordButton = document.getElementById('toggle-confirm-password');

function togglePasswordVisibility(input, button) {
    if (input.type === 'password') {
        input.type = 'text';
        button.src = 'assets/ochi-parola/eye.png';
    } else {
        input.type = 'password';
        button.src = 'assets/ochi-parola/ochi.png';
    }
}

togglePasswordButton.addEventListener('click', function () {
    togglePasswordVisibility(passwordInput, togglePasswordButton);
});

toggleConfirmPasswordButton.addEventListener('click', function () {
    togglePasswordVisibility(confirmPasswordInput, toggleConfirmPasswordButton);
});
