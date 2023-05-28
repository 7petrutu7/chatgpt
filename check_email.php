<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = mysqli_real_escape_string($conn, $_POST["email"]);

    $sql = "SELECT * FROM utilizatori WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo 'exists';
    } else {
        echo 'not_exists';
    }
    
    $conn->close();
}
?>
