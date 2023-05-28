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

// Verificarea dacă parametrul user_id există în URL
if (!isset($_GET['user_id'])) {
    die("Parametrul user_id lipsește.");
}

$user_id = $_GET['user_id'];

// Interogarea pentru a număra anunțurile active ale utilizatorului specificat
$stmt = $conn->prepare("SELECT COUNT(*) AS numar_anunturi_active FROM anunturi WHERE id_utilizator = ? AND stare_anunt = 'activ'");
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();
$numarAnunturiActive = $row['numar_anunturi_active'];

// Returnarea răspunsului JSON cu numărul de anunțuri active
$response = array('numar_anunturi_active' => $numarAnunturiActive);
echo json_encode($response);

$stmt->close();
$conn->close();
?>
