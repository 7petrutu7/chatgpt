<?php
require_once 'configpdo.php';

// Verificați dacă utilizatorul are rol de admin
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: index.html");
    exit();
}

$user_id = $_SESSION['user_id'];

$sql = "SELECT a.id_anunt, a.id_utilizator, a.titlu, a.descriere, a.pret, a.moneda, a.img1, a.img2, a.img3, a.data_adaugarii, a.telefon, u.nume
        FROM anunturi a
        INNER JOIN utilizatori u ON a.id_utilizator = u.id
        WHERE a.stare_anunt = 'in_asteptare'";

$stmt = $pdo->prepare($sql);
$stmt->execute();

$anunturi = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($anunturi);
?>
