<?php
include 'config.php';
include 'token.php';
require 'vendor/autoload.php';
require_once __DIR__ . '/send_activation_code.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verificarea reCAPTCHA
    $recaptchaSecret = '6LdjqCMlAAAAABXyCHbMVCSvan0GrgZSBEgJmL73';
    $recaptchaResponse = $_POST['g-recaptcha-response'];
    $recaptchaUrl = "https://www.google.com/recaptcha/api/siteverify?secret={$recaptchaSecret}&response={$recaptchaResponse}";
    $recaptcha = json_decode(file_get_contents($recaptchaUrl));

    if ($recaptcha->success) {
        $nume = mysqli_real_escape_string($conn, $_POST["nume"]);
        $email = mysqli_real_escape_string($conn, $_POST["email"]);
        $parola = mysqli_real_escape_string($conn, $_POST["parola"]);
        $hashed_password = password_hash($parola, PASSWORD_DEFAULT);

        $cod_activare = rand(100000, 999999);
        $activat = 0;

        $sql = "INSERT INTO utilizatori (nume, email, parola, cod_activare, activat) VALUES (?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssis", $nume, $email, $hashed_password, $cod_activare, $activat);
        $result = $stmt->execute();

        if ($result === TRUE) {
            $user_id = $stmt->insert_id; // Preluăm ID-ul utilizatorului nou creat

            // Trimiteți e-mailul de notificare
            $mail = new PHPMailer\PHPMailer\PHPMailer(true);

            try {
                // Setează configurarea serverului SMTP
                $mail->isSMTP();
                $mail->Host = 'gnldm1030.siteground.biz';
                $mail->SMTPAuth = true;
                $mail->Username = 'informatii-utilizatori@emaisimplu.com';
                $mail->Password = 'Redred!1';
                $mail->SMTPSecure = 'ssl';
                $mail->Port = 465;

                // Setează expeditorul și destinatarul
                $mail->setFrom('informatii-utilizatori@emaisimplu.com', 'Utilizator nou');
                $mail->addAddress('7petrutu7@gmail.com', 'E mai simplu.');

                // Setează subiectul și corpul e-mailului
                $mail->isHTML(true);
                $mail->Subject = '';
                $mail->Body = "Nume: " . $nume . "\nEmail: " . $email . "\nUser ID: " . $user_id . "\n\n" . "<a href='https://emaisimplu.com/blocheaza_utilizator.php?user_id=" . $user_id . "&token=" . $secure_token . "'>Blochează utilizatorul</a>";


                // Trimite e-mailul
                $mail->send();
            } catch (PHPMailer\PHPMailer\Exception $e) {
                // În cazul în care trimiterea e-mailului eșuează, înregistrați eroarea (puteți înlocui acest cod cu logarea dorită)
                error_log("Mesajul nu a putut fi trimis. Eroare: " . $mail->ErrorInfo);
            }
                    // Trimiteți e-mailul cu codul de activare
        \EmailActivation\send_activation_code($email, $nume, $cod_activare);

        header('Location: activare.php');
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Eroare reCAPTCHA: Vă rugăm să confirmați că nu sunteți un robot.";
}

}

$conn->close();
?>