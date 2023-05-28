<?php

namespace EmailReset;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

function send_password_reset($email, $nume, $token)
{
    global $conn; // Adăugați această linie pentru a putea utiliza conexiunea la baza de date

    $mail = new PHPMailer(true);

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
        $mail->setFrom('informatii-utilizatori@emaisimplu.com', 'E mai simplu');
        $mail->addAddress($email, $nume);

        // Setează subiectul și corpul e-mailului
        $mail->isHTML(true);
        $mail->Subject = 'Resetare parola pentru contul E mai simplu';
        $mail->Body = "Salutare, <strong>$nume</strong>!<br><br>Am inregistrat cererea ta de resetare a parolei.<br><br>Ca sa alegi o noua parola pentru contul tau, apasa butonul de mai jos:<br><br><a href='https://emaisimplu.com/reset_password_form.php?token=" . urlencode($token) . "' style='padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;'>Resetare parola</a><br><br>Daca nu ai solicitat acest e-mail, te rugam sa ignori acest mesaj.<br><br>O zi buna,<br>Echipa E mai simplu.";

        // Trimite e-mailul
        $mail->send();

        // Resetăm starea token-ului de resetare a parolei la 0 atunci când se trimite e-mailul de resetare a parolei
        $sql_update = "UPDATE utilizatori SET token_resetare_parola_folosit = 0 WHERE email = '$email'";
        $conn->query($sql_update);

    } catch (Exception $e) {
        // În cazul în care trimiterea e-mailului eșuează, înregistrați eroarea (puteți înlocui acest cod cu logarea dorită)
        error_log("Mesajul nu a putut fi trimis. Eroare: " . $mail->ErrorInfo);
    }
}
