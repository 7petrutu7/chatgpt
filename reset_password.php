<?php
include 'config.php';
require_once 'send_password_reset.php';

$email = '';
$errorMessage = '';
$passwordResetSent = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = mysqli_real_escape_string($conn, $_POST["email"]);

    $sql = "SELECT * FROM utilizatori WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        if ($user['blocat'] == 0) {
            $token = bin2hex(openssl_random_pseudo_bytes(16));
            $tokenCreation = date("Y-m-d H:i:s");
            $sql = "UPDATE utilizatori SET token_resetare_parola = ?, token_resetare_parola_creare = ?, token_resetare_parola_folosit = 0 WHERE email = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("sss", $token, $tokenCreation, $email);
            $stmt->execute();

            EmailReset\send_password_reset($email, $user['nume'], $token);
            $passwordResetSent = true;
        } else {
            $errorMessage = "Acest cont a fost blocat pe o perioada nedeterminata pentru incalcarea termeniilor si conditiilor website-ului emaisimplu.ro.";
        }
    } else {
        $errorMessage = "Nu am gasit niciun cont asociat acestei adrese de email.";
    }

    $conn->close();
}
?>


<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resetare parolă</title>
    <script>
document.addEventListener("DOMContentLoaded", function() {
  var emailInput = document.getElementById("email");
  var emailError = document.getElementById("emailError");
  var requiredError = document.getElementById("requiredError");
  var form = document.getElementById("resetPasswordForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    var hasErrors = false;

    if (emailInput.value === "") {
      requiredError.style.display = "block";
      hasErrors = true;
    } else {
      requiredError.style.display = "none";
    }

    if (emailInput.value !== "" && (!emailInput.value.includes('@') || !emailInput.value.includes('.'))) {
      emailError.style.display = "block";
      hasErrors = true;
    } else {
      emailError.style.display = "none";
    }

    if (!hasErrors) {
      form.submit();
    }
  });
});
</script>
</head>
<body>
    <h1>Resetare parolă</h1>
    <?php if (!$passwordResetSent): ?>
        <p>Introduceți adresa de email asociată contului pentru a primi un link de resetare a parolei.</p>
        <form id="resetPasswordForm" action="reset_password.php" method="POST" novalidate>
            <input type="email" id="email" name="email" placeholder="Email" required>
            <span id="emailError" style="color: red; display: none;">Va rugam sa introduce o adresa de email valida.</span>
            <span id="requiredError" style="color: red; display: none;">Va rugam sa completati acest camp.</span>
            <?php if ($errorMessage): ?>
                <p style="color:red;"><?php echo $errorMessage; ?></p>
            <?php endif; ?>
            <input type="submit" value="Trimite">
        </form>
    <?php else: ?>
        <p style="color:green;">Am trimis un email cu link-ul de resetare a parolei la adresa indicată.</p>
    <?php endif; ?>
</body>
</html>
