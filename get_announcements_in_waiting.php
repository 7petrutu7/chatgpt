<?php
require_once 'config.php';

session_start();

// Preiau id-ul utilizatorului din sesiune
$user_id = $_SESSION['user_id'];

// Interoghez baza de date pentru a prelua toate anunțurile în așteptare ale utilizatorului
$sql = "SELECT id_anunt, titlu, stare, locatie, oras, data_adaugarii, pret, moneda, img1 FROM anunturi WHERE id_utilizator=? AND stare_anunt='in_asteptare'";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);

$stmt->execute();
$result = $stmt->get_result();

$data = [];

if ($result->num_rows > 0) {
    // Preiau toate anunțurile în așteptare
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

echo json_encode($data);

$stmt->close();
$conn->close();
?>
