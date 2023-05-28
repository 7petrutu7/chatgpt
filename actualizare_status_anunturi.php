<?php
// Conexiunea la baza de date
$db = new mysqli('localhost', 'uwg7snicgyzqg', 'Redred!1', 'dbzz9ercszjsqu');

// Verificare conexiune
if ($db->connect_error) {
    die("Eroare de conexiune: " . $db->connect_error);
}

if(!$db->query("SET time_zone='Europe/Bucharest'")) {
    die("Eroare la setarea fusului orar: " . $db->error);
}

// Interogarea SQL pentru actualizarea statusului anunțurilor
$query = "UPDATE anunturi SET stare_anunt = 'dezactivat' WHERE DATEDIFF(CURRENT_DATE, data_adaugarii) > 30 AND stare_anunt = 'activ'";

// Executare interogare
if ($db->query($query) === TRUE) {
    echo "Înregistrare actualizată cu succes";
} else {
    echo "Eroare la actualizarea înregistrării: " . $db->error;
}

// Închidere conexiune
$db->close();
?>
