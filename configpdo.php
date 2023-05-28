<?php

$servername = "localhost";
$username = "uwg7snicgyzqg";
$password = "Redred!1";
$dbname = "dbzz9ercszjsqu";

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

?>