<?php
// disable_announcement.php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$servername = "localhost";
$username = "uwg7snicgyzqg";
$password = "Redred!1";
$dbname = "dbzz9ercszjsqu";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(['status' => 'error', 'message' => $conn->connect_error]));
} 

if (isset($_REQUEST['id']) && is_numeric($_REQUEST['id'])) {
    $id = $_REQUEST['id'];
    $sql = "UPDATE anunturi SET stare_anunt='dezactivat' WHERE id_anunt=$id AND stare_anunt='activ'";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode(['status' => 'error', 'message' => $conn->error]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'ID-ul lipseste sau nu este numeric.']);
}

$conn->close();
?>
