<?php
include 'config.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';
require_once 'send_activation_code.php';

$email = isset($_GET['email']) ? $_GET['email'] : '';
$errorMessage = '';
$activationCodeSent = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = mysqli_real_escape_string($conn, $_POST["email"]);
    $cod_activare = mysqli_real_escape_string($conn, $_POST["cod_activare"]);

    $sql = "SELECT * FROM utilizatori WHERE email = '$email' AND cod_activare = '$cod_activare'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $sql = "UPDATE utilizatori SET activat = 1 WHERE email = '$email'";
        $conn->query($sql);
        header('Location: cont_activat.html');
        exit();
    } else {
        $errorMessage = "Codul de activare este incorect.";
    }

    $conn->close();
} elseif (isset($_GET['resend'])) {
    // Selectați numele și codul de activare din baza de date folosind adresa de e-mail
    $sql = "SELECT nume, cod_activare FROM utilizatori WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $nume = $row['nume'];
        $cod_activare = $row['cod_activare'];

        // Apelați funcția send_activation_code cu toate argumentele necesare
        \EmailActivation\send_activation_code($email, $nume, $cod_activare);
        $activationCodeSent = true;
    }
}
?>

<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cont neactivat</title>
</head>
<body>
    <h1>Cont neactivat</h1>
    <p>Contul dvs. nu este încă activ. Pentru a-l activa, vă rugăm să introduceți codul de activare primit prin e-mail. Dacă nu ați primit niciun e-mail, vă rugăm să verificați categoria spam sau să faceți <a href="cont_neactivat.php?email=<?= urlencode($email) ?>&resend=true">click aici</a> pentru a vi-l retrimite.</p>
    <?php if ($errorMessage): ?>
        <p style="color:red;"><?php echo $errorMessage; ?></p>
    <?php endif; ?>
    <?php if ($activationCodeSent): ?>
        <p style="color:green;">Un e-mail cu codul de activare a fost trimis la adresa dvs. de e-mail. Vă rugăm să verificați.</p>
    <?php endif; ?>
<form action="cont_neactivat.php" method="POST">
    <input type="hidden" name="email" value="<?= htmlspecialchars($email) ?>">
    <input type="number" name="cod_activare" placeholder="Cod activare" required>
    <input type="submit" value="Activează">
</form>
</body>
</html>