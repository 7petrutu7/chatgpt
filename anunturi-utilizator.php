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

// Interogarea pentru a obține anunțurile utilizatorului specificat
$stmt = $conn->prepare("SELECT a.*, u.nume FROM anunturi a JOIN utilizatori u ON a.id_utilizator = u.id WHERE a.id_utilizator = ? AND a.stare_anunt = 'activ'");
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $anunturi = array();

    while ($row = $result->fetch_assoc()) {
        $anunt = array(
            'id_anunt' => $row['id_anunt'],
            'id_utilizator' => $row['id_utilizator'],
            'titlu' => $row['titlu'],
            'descriere' => $row['descriere'],
            'pret' => $row['pret'],
            'moneda' => $row['moneda'],
            'img1' => $row['img1'],
            'nume' => $row['nume'],
            'telefon' => $row['telefon'],
            'data_adaugarii' => $row['data_adaugarii']
        );

        $anunturi[] = $anunt;
    }

    echo json_encode($anunturi);
} else {
    echo json_encode(array());
}

$stmt->close();
$conn->close();
?>
