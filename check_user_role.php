<?php

require_once 'configpdo.php';

session_start();

if (isset($_SESSION['user_id'])) {
    $user_id = $_SESSION['user_id'];

    $sql = "SELECT rol FROM utilizatori WHERE id = :user_id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([':user_id' => $user_id]);

    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($result) {
        $role = $result['rol'];
        echo json_encode(['role' => $role]);
    } else {
        echo json_encode(['role' => 'utilizator']); // Rol implicit pentru utilizatorii logați
    }
} else {
    echo json_encode(['role' => 'utilizator']); // Rol implicit pentru utilizatorii neautentificați
}
?>