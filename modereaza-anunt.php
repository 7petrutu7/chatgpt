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

// Verificarea dacă parametrul anunt_id și motiv există în URL
if (!isset($_GET['anunt_id']) || !isset($_GET['motiv'])) {
    die("Parametrul anunt_id sau motiv lipsește.");
}

$anuntId = $_GET['anunt_id'];
$motiv = $_GET['motiv'];

// Actualizăm starea anunțului în baza de date
$stmt = $conn->prepare("UPDATE anunturi SET stare_anunt = 'moderat' WHERE id_anunt = ?");
$stmt->bind_param("i", $anuntId);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    // Obținem valoarea actuală a 'avertizeaza_utilizator' și 'motiv' pentru utilizatorul asociat cu anunțul
    $stmt_check = $conn->prepare("SELECT avertizeaza_utilizator, motiv FROM utilizatori WHERE id = (SELECT id_utilizator FROM anunturi WHERE id_anunt = ?)");
    $stmt_check->bind_param("i", $anuntId);
    $stmt_check->execute();
    $result = $stmt_check->get_result();
    $row = $result->fetch_assoc();
    $stmt_check->close();

    $current_value = $row['avertizeaza_utilizator'];
    $current_motiv = $row['motiv'];

    // Dacă valoarea curentă este mai mică de 2, o actualizăm
    if ($current_value < 2) {
        // Actualizăm valoarea avertizeaza_utilizator și motiv în baza de date
        $stmt2 = $conn->prepare("UPDATE utilizatori SET avertizeaza_utilizator = avertizeaza_utilizator + 1, motiv = IF(motiv = '', ?, motiv) WHERE id = (SELECT id_utilizator FROM anunturi WHERE id_anunt = ?)");

        if ($stmt2 === false) {
            die("Eroare la pregătirea interogării: " . $conn->error);
        }

        $stmt2->bind_param("si", $motiv, $anuntId);
        $stmt2->execute();

        if ($stmt2->affected_rows > 0) {
            echo json_encode(array('success' => true));
        } else {
            echo json_encode(array('success' => false));
        }
        $stmt2->close();
    } else {
        echo json_encode(array('success' => true)); // Se consideră un succes chiar dacă nu s-a modificat valoarea 'avertizeaza_utilizator'
    }
} else {
    echo json_encode(array('success' => false));
}

$stmt->close();
$conn->close();

?>
