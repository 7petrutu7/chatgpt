<?php

header("Cache-Control: no-cache, must-revalidate"); // Dezactivează cache-ul

// Conectarea la baza de date
$servername = "localhost";
$username = "uwg7snicgyzqg";
$password = "Redred!1";
$dbname = "dbzz9ercszjsqu";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Conexiunea la baza de date a eșuat: " . $conn->connect_error);
}

// Verificarea dacă parametrul anunt_id și stare_anunt există în URL
if (!isset($_GET['anunt_id']) || !isset($_GET['stare_anunt'])) {
    die("Parametrii anunt_id și stare_anunt lipsesc.");
}

$anuntId = $_GET['anunt_id'];
$stareAnunt = $_GET['stare_anunt'];

// Actualizăm starea anunțului în baza de date
$stmt = $conn->prepare("UPDATE anunturi SET stare_anunt = ? WHERE id_anunt = ?");
$stmt->bind_param("si", $stareAnunt, $anuntId);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo json_encode(array('success' => true));
} else {
    echo json_encode(array('success' => false));
}

$stmt->close();
$conn->close();
?>
