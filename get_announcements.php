<?php
session_start();

require_once 'config.php';

// Verifica daca user_id este setat in sesiune
if (!isset($_SESSION['user_id'])) {
    die("Utilizatorul nu este logat.");
}

// Preiau id-ul utilizatorului din sesiune
$user_id = $_SESSION['user_id'];

// Interoghez baza de date pentru a afla numărul de anunțuri pentru fiecare stare
$sql = "SELECT stare_anunt, COUNT(*) as nr FROM anunturi WHERE id_utilizator=? GROUP BY stare_anunt";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);

$stmt->execute();
$result = $stmt->get_result();

$data = [
    "activ" => 0,
    "in_asteptare" => 0,
    "moderat" => 0,
    "dezactivat" => 0,
];

if ($result->num_rows > 0) {
    // Preiau numărul de anunțuri pentru fiecare stare
    while($row = $result->fetch_assoc()) {
        $data[$row['stare_anunt']] = $row['nr'];
    }
}

echo json_encode($data);

$stmt->close();
$conn->close();
?>
