<?php
header("Cache-Control: no-cache, no-store, must-revalidate");

include 'config.php';

$token = isset($_GET['token']) ? $_GET['token'] : '';
$errorMessage = '';
$passwordResetSuccess = false;
$validToken = false;
$user = null;

if ($token) {
    $sql = "SELECT * FROM utilizatori WHERE token_resetare_parola = ? AND token_resetare_parola_creare >= NOW() - INTERVAL 1 DAY";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $token);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if ($user['token_resetare_parola_folosit'] == 0) {
            if ($user['blocat'] == 0) {
                $validToken = true;
            } else {
                $errorMessage = "Acest cont a fost blocat pe o perioada nedeterminata pentru incalcarea termeniilor si conditiilor website-ului emaisimplu.ro.";
            }
        } else {
            $errorMessage = "Link-ul de resetare a parolei a fost deja folosit.";
        }
    } else {
        $errorMessage = "Link-ul de resetare a parolei a expirat.";
    }
}

if ($validToken && $_SERVER["REQUEST_METHOD"] == "POST") {
    // Codul pentru resetarea parolei și marcarea token-ului ca fiind folosit
    $new_password = isset($_POST['password']) ? $_POST['password'] : '';
    $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);

    $sql_update_password = "UPDATE utilizatori SET parola = ? WHERE token_resetare_parola = ?";
    $stmt_update_password = $conn->prepare($sql_update_password);
    $stmt_update_password->bind_param("ss", $hashed_password, $token);
    $stmt_update_password->execute();

    if ($stmt_update_password->affected_rows > 0) {
        $passwordResetSuccess = true;

        // Setăm token_resetare_parola_folosit la 1 când parola este resetată cu succes
        $sql_update = "UPDATE utilizatori SET token_resetare_parola_folosit = 1 WHERE token_resetare_parola = ?";
        $stmt_update = $conn->prepare($sql_update);
        $stmt_update->bind_param("s", $token);
        $stmt_update->execute();
    } else {
        $errorMessage = "A apărut o eroare la resetarea parolei. Vă rugăm să încercați din nou.";
    }

    $conn->close();
}
?>


<!-- ... (codul HTML rămâne neschimbat) -->


<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resetare parolă</title>
    <link rel="stylesheet" href="afisare_parola.css">
    <script>
        function togglePasswordVisibility(inputId, eyeIconId) {
            var passwordInput = document.getElementById(inputId);
            var eyeIcon = document.getElementById(eyeIconId);

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                eyeIcon.src = "assets/ochi-parola/eye.png";
            } else {
                passwordInput.type = "password";
                eyeIcon.src = "assets/ochi-parola/ochi.png";
            }
            }

        function validateForm() {
            let password = document.forms["reset_password_form"]["password"].value;
            let password_confirm = document.forms["reset_password_form"]["password_confirm"].value;
            let passwordError = document.getElementById("passwordError");
            let passwordConfirmError = document.getElementById("passwordConfirmError");

            passwordError.style.display = "none";
            passwordConfirmError.style.display = "none";

            let isValid = true;

            if (password === "") {
                passwordError.innerHTML = "Vă rugăm să completați acest câmp.";
                passwordError.style.display = "block";
                isValid = false;
            } else if (password.length < 6 || !/\d/.test(password)) {
                passwordError.innerHTML = "Parola trebuie să conțină minim 6 caractere și cel puțin un număr.";
                passwordError.style.display = "block";
                isValid = false;
            }

            if (password_confirm === "") {
                passwordConfirmError.innerHTML = "Vă rugăm să completați acest câmp.";
                passwordConfirmError.style.display = "block";
                isValid = false;
            } else if (password !== password_confirm) {
                passwordConfirmError.innerHTML = "Parolele nu coincid.";
                passwordConfirmError.style.display = "block";
                isValid = false;
            }

            return isValid;
        }
    </script>
</head>
<body>
    <?php if ($validToken): ?>
        <?php if (!$passwordResetSuccess): ?>
            <h1>Resetare parolă</h1>
            <p>Introduceți noua parolă și confirmați-o.</p>
            <form name="reset_password_form" action="reset_password_form.php?token=<?= htmlspecialchars($token) ?>" method="POST" onsubmit="return validateForm();">
                <div>
                    <input type="password" id="password" name="password" placeholder="Parola nouă">
                    <span id="passwordError" style="color: red; display: none;"></span>
                    <img id="passwordEye" src="assets/ochi-parola/ochi.png" onclick="togglePasswordVisibility('password', 'passwordEye')" style="cursor:pointer;" alt="Toggle Password Visibility">
                </div>
                <div>
                    <input type="password" id="password_confirm" name="password_confirm" placeholder="Confirmați parola">
                    <span id="passwordConfirmError" style="color: red; display: none;"></span>
                    <img id="confirmPasswordEye" src="assets/ochi-parola/ochi.png" onclick="togglePasswordVisibility('password_confirm', 'confirmPasswordEye')" style="cursor:pointer;" alt="Toggle Password Visibility">
                </div>
                <?php if ($errorMessage): ?>
                    <p style="color:red;"><?php echo $errorMessage; ?></p>
                <?php endif; ?>
                <input type="submit" value="Resetare parolă">
            </form>
        <?php else: ?>
            <p style="color:green;">Parola dvs. a fost modificată cu succes. Vă puteți autentifica acum.</p>
        <?php endif; ?>
    <?php else: ?>
        <h1>Resetare parolă</h1>
        <p style="color:red;">Link-ul de resetare a parolei a expirat.</p>
    <?php endif; ?>
</body>
</html>