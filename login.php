<?php
session_start();
error_reporting(0);
require_once 'config.php';

$email = $_POST['email'];
$parola = $_POST['parola'];

// Verifică datele de logare (email și parolă) în baza de date
$stmt = $conn->prepare("SELECT * FROM utilizatori WHERE email = ?");
$stmt->bind_param('s', $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows == 0) {
    echo json_encode(['status' => 'error', 'message' => 'Nu exista niciun cont asociat acestui email.']);
} else {
    $user = $result->fetch_assoc();
    if (password_verify($parola, $user['parola'])) {
        if ($user['activat'] == 1) {
            if ($user['blocat'] == 0) {
                $_SESSION['isLoggedIn'] = true;  // Setăm utilizatorul ca fiind logat
                $_SESSION['user_name'] = $user['nume'];  // Puteți de asemenea să stocați și alte informații despre utilizator în sesiune
                $_SESSION['user_id'] = $user['id']; // Stochează id-ul utilizatorului în sesiune
                echo json_encode(['status' => 'success', 'user_name' => $user['nume']]);
            } else {
                echo json_encode(['status' => 'blocked', 'redirect' => 'cont_blocat.php']);
            }
        } else {
            echo json_encode(['status' => 'inactive', 'redirect' => 'cont_neactivat.php?email=' . urlencode($email)]);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Parola incorecta.']);
    }
}
?>
