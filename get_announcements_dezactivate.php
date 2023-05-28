<?php
require_once 'config.php';

session_start();

// Preiau id-ul utilizatorului din sesiune
$user_id = $_SESSION['user_id'];

// Interoghez baza de date pentru a prelua toate anunțurile dezactivate ale utilizatorului
$sql = "SELECT * FROM anunturi WHERE id_utilizator=? AND stare_anunt='dezactivat'";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);

$stmt->execute();
$result = $stmt->get_result();

$data = [];

if ($result->num_rows > 0) {
    // Preiau toate anunțurile dezactivate
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

echo json_encode($data);

$stmt->close();
$conn->close();
?>
