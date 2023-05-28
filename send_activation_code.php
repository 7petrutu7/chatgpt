<?php

namespace EmailActivation;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

function send_activation_code($email, $nume, $cod_activare)
{
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
        $mail->Subject = 'Codul de activare pentru contul E mai simplu';
        $mail->Body = "Buna, <strong>$nume</strong>!<br><br>iti multumim pentru inregistrare! Pentru a-ti activa contul, foloseste urmatorul cod de activare:<br><br><h3>$cod_activare</h3><br>Daca nu ai solicitat acest e-mail, te rugam sa ignori acest mesaj.<br><br>O zi buna,<br>Echipa E mai simplu.";

        // Trimite e-mailul
        $mail->send();
    } catch (Exception $e) {
        // În cazul în care trimiterea e-mailului eșuează, înregistrați eroarea (puteți înlocui acest cod cu logarea dorită)
        error_log("Mesajul nu a putut fi trimis. Eroare: " . $mail->ErrorInfo);
    }
}
