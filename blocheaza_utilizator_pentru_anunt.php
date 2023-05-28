<?php

header("Cache-Control: no-cache, must-revalidate"); // Dezactivează cache-ul

$servername = "localhost";
$username = "uwg7snicgyzqg";
$password = "Redred!1";
$dbname = "dbzz9ercszjsqu";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Conexiunea la baza de date a eșuat: " . $conn->connect_error);
}

if (!isset($_GET['user_id'])) {
    die("Parametrul user_id lipsește.");
}

$userId = $_GET['user_id'];

$stmt = $conn->prepare("SELECT blocat_pentru_anunt FROM utilizatori WHERE id = ?");
$stmt->bind_param("i", $userId);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

if ($user['blocat_pentru_anunt'] == 0) {
    $stmt = $conn->prepare("UPDATE utilizatori SET blocat_pentru_anunt = 1 WHERE id = ?");
    $stmt->bind_param("i", $userId);
    $stmt->execute();
}

$stmt2 = $conn->prepare("SELECT img1, img2, img3, img4, img5, img6, img7, img8 FROM anunturi WHERE id_utilizator = ?");
$stmt2->bind_param("i", $userId);
$stmt2->execute();
$result2 = $stmt2->get_result();

while ($anunt = $result2->fetch_assoc()) {
    for ($i = 1; $i <= 8; $i++) {
        $img = $anunt["img$i"];
        if ($img !== "nedefinit") {
            $file_to_delete = "assets/imagini_anunturi/$img";
            if (file_exists($file_to_delete)) {
                unlink($file_to_delete);
            }
        }
    }
}

$stmt3 = $conn->prepare("DELETE FROM anunturi WHERE id_utilizator = ?");
$stmt3->bind_param("i", $userId);
$stmt3->execute();

if ($stmt3->affected_rows > 0) {
    echo json_encode(array('success' => true));
} else {
    echo json_encode(array('success' => false));
}

$stmt->close();
$stmt2->close();
$stmt3->close();
$conn->close();

?>
