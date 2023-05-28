<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Înlocuiți cu calea dvs. către PHPMailer
include 'config.php';

$user_id = isset($_GET['user_id']) ? $_GET['user_id'] : '';
$token = isset($_GET['token']) ? $_GET['token'] : '';

// Citiți token-ul de securitate din fișierul 'secure_token.txt'
$secure_token_file = 'secure_token.txt';
if (file_exists($secure_token_file)) {
    $secure_token = trim(file_get_contents($secure_token_file));
} else {
    echo "Fișierul token de securitate nu a fost găsit.";
    exit;
}

// Verificați token-ul de securitate și validați-l
if ($token !== $secure_token) {
    echo "Token de securitate invalid.";
    exit;
}

// Verificați dacă utilizatorul este deja blocat sau activat
$sql_check = "SELECT blocat, activat FROM utilizatori WHERE id = ?";
$stmt_check = $conn->prepare($sql_check);
$stmt_check->bind_param("i", $user_id);
$stmt_check->execute();
$result_check = $stmt_check->get_result();
$row = $result_check->fetch_assoc();
if ($row !== null) {
    $user_blocked = $row['blocat'];
    $user_activated = $row['activat'];
} else {
    echo "Nu s-a găsit niciun utilizator cu acest ID.";
    exit;
}

if ($user_blocked == 1) {
    echo "Utilizatorul este deja blocat.";
    exit;
} else {
    // Blocați utilizatorul
    $sql = "UPDATE utilizatori SET blocat = 1 WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $user_id);
    $stmt->execute();

    // Dacă utilizatorul este activat, trimiteți e-mailul de notificare
    if ($user_activated == 1) {
        // Preluăm e-mailul utilizatorului pentru a trimite notificare
        $sql_email = "SELECT email FROM utilizatori WHERE id = ?";
        $stmt_email = $conn->prepare($sql_email);

        if ($stmt_email === false) {
            echo "Eroare la pregătirea interogării: " . htmlspecialchars($conn->error);
            exit;
        }

                $stmt_email->bind_param("i", $user_id);

        if (!$stmt_email->execute()) {
            echo "Eroare la executarea interogării: " . htmlspecialchars($stmt_email->error);
            exit;
        }

        $result = $stmt_email->get_result();

        if ($result->num_rows == 0) {
            echo "Nu s-a găsit niciun utilizator cu acest ID.";
            exit;
        }

        $user_email = $result->fetch_assoc()['email'];

        if (!$user_email) {
            echo "Nu s-a putut prelua adresa de e-mail a utilizatorului.";
            exit;
        }

        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->Host = 'gnldm1030.siteground.biz'; // Înlocuiți cu hostul dvs. de e-mail
        $mail->SMTPAuth = true;
        $mail->Username = 'informatii-utilizatori@emaisimplu.com'; // Înlocuiți cu adresa dvs. de e-mail
        $mail->Password = 'Redred!1'; // Înlocuiți cu parola dvs. de e-mail
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        $mail->setFrom('informatii-utilizatori@emaisimplu.com', 'EmaiSimplu'); // Înlocuiți cu adresa dvs. de e-mail și numele dvs. de afișare
        $mail->addAddress($user_email);

        $mail->isHTML(true);
        $mail->Subject = 'Contul dvs. a fost blocat';
        $mail->Body = '<p>Bună,</p><p>Contul dvs. de pe EmaiSimplu a fost blocat de către administrator. Pentru a obține mai multe informații sau pentru a discuta despre această acțiune, vă rugăm să contactați echipa de asistență.</p><p>O zi bună,</p><p>Echipa EmaiSimplu</p>';

        if (!$mail->send()) {
            echo 'Mesajul nu a putut fi trimis. Eroare: ' . $mail->ErrorInfo;
            exit;
        } else {
            echo 'Utilizatorul a fost blocat și a primit o notificare prin e-mail.';
        }
    } else {
        echo 'Utilizatorul a fost blocat cu succes, dar nu a primit o notificare prin e-mail deoarece nu este activat.';
    }
}

?>
