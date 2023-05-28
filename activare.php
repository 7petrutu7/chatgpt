<?php
include 'config.php';

$errorMessage = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = mysqli_real_escape_string($conn, $_POST["email"]);
    $cod_activare = mysqli_real_escape_string($conn, $_POST["cod_activare"]);

    $sql = "SELECT * FROM utilizatori WHERE email = '$email' AND cod_activare = '$cod_activare'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if ($row['activat'] == 0) {
            $sql = "UPDATE utilizatori SET activat = 1 WHERE email = '$email'";
            $conn->query($sql);
            header('Location: cont_activat.html');
            exit();
        } else {
            $errorMessage = "Contul a fost deja activat, vă puteți autentifica fără probleme.";
        }
    } else {
        $errorMessage = "Codul de activare sau adresa de e-mail este incorectă.";
    }

    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Activare cont</title>
</head>
<body>
    <h1>Activare cont</h1>
    <p>Pentru a activa contul, introduceți codul de activare primit prin e-mail.</p>
    <?php if ($errorMessage): ?>
        <p style="color:red;"><?php echo $errorMessage; ?></p>
    <?php endif; ?>
    <form action="activare.php" method="POST">
        <input type="email" name="email" placeholder="Adresa de e-mail" required>
        <input type="number" name="cod_activare" placeholder="Cod activare" required>
        <input type="submit" value="Activează">
    </form>
</body>
</html>
