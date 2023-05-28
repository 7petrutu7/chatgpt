<?php
session_start();
require_once 'config.php';


if (!isset($_SESSION['isLoggedIn']) || !$_SESSION['isLoggedIn']) {
    die('Eroare: Utilizatorul nu este logat.');
}

$titlu = $_POST['titlu'];
$descriere = $_POST['descriere'];
$pret = $_POST['pret'];
$moneda = $_POST['moneda'];
$vanzator = $_POST['vanzator'];
$stare = $_POST['stare'];
$locatie = $_POST['locatie'];
$oras = $_POST['oras'];
$telefon = $_POST['NumarTelefon'];
$id_utilizator = $_SESSION['user_id']; // Obținem id-ul utilizatorului din sesiune
$data_adaugarii = date('Y-m-d H:i:s', strtotime('+3 hours'));


if (!isset($titlu) || trim($titlu) === '' || !isset($descriere) || trim($descriere) === '' || !isset($pret) || trim($pret) === '' || !isset($moneda) || trim($moneda) === '' ||  !isset($locatie) || trim($locatie) === '' || !isset($oras) || trim($oras) === '' || !isset($telefon) || trim($telefon) === '') {
    die('Eroare: Toate câmpurile sunt obligatorii.');
}

if (!isset($stare) || trim($stare) === '') {
    $stare = 'nedefinit';
}

if (!isset($vanzator) || trim($vanzator) === '') {
    $vanzator = 'nedefinit';
}

$img_names = array();
echo "Calea fișierului: " . $target_file . "<br>";

if (isset($_FILES['imagini'])) {
  echo "Numărul de imagini încărcate: " . count($_FILES['imagini']['name']) . "<br>";
    for ($i = 0; $i < count($_FILES['imagini']['name']); $i++) {
     echo "Imaginea " . ($i + 1) . ": " . $_FILES['imagini']['name'][$i] . "<br>";
        echo "Procesare imaginea " . ($i + 1) . ": " . $_FILES['imagini']['name'][$i] . "<br>";
        if ($i >= 8) {
        break;
    }
        $tmpFilePath = $_FILES['imagini']['tmp_name'][$i];
        echo "Fișierul temporar pentru imaginea " . ($i + 1) . ": " . $tmpFilePath . "<br>";
        if ($tmpFilePath != "") {
            $mime_type = mime_content_type($tmpFilePath);
            $filename = uniqid() . ".webp"; // Nume unic pentru fișierul convertit
            $target_dir = 'assets/imagini_anunturi/';
            $target_file = $target_dir . $filename;

            $uploadOk = 1;

            $check = getimagesize($tmpFilePath);
            if ($check !== false) {
                $uploadOk = 1;
            } else {
                echo "Fișierul nu este o imagine.";
                $uploadOk = 0;
            }

            if ($_FILES["imagini"]["size"][$i] > 500000) {
                echo "Fișierul este prea mare.";
                $uploadOk = 0;
            }

            if ($uploadOk != 0) {
                $image = null;
                switch ($mime_type) {
                case "image/jpeg":
                case "image/jpg":
                    $image = imagecreatefromjpeg($tmpFilePath);
                    break;
                case "image/png":
                    $image = imagecreatefrompng($tmpFilePath);
                    break;
                case "image/gif":
                    $image = imagecreatefromgif($tmpFilePath);
                    break;
                case "image/webp":
                    $image = imagecreatefromwebp($tmpFilePath);
                    break;
                default:
                    echo "Formatul de fișier nu este suportat.";
                    exit();
                }



                if ($image !== null) {
                    imagewebp($image, $target_file);
                    imagedestroy($image);
                    $img_names[] = $filename; // Adăugați numele imaginii în array
                } else {
                    echo "A apărut o eroare la încărcarea și conversia fișierului.";
                }
            } else {
                echo "Fișierul nu a fost încărcat.";
            }
        }
    }
}

for ($i = 0; $i < 8; $i++) {
    if (isset($img_names[$i])) {
        ${"img" . ($i + 1)} = $img_names[$i];
    } else {
        ${"img" . ($i + 1)} = 'nedefinit';
    }
}


$sql = "INSERT INTO anunturi (titlu, descriere, pret, moneda, vanzator, stare, locatie, oras, img1, img2, img3, img4, img5, img6, img7, img8, telefon, id_utilizator, data_adaugarii) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssssssssssssssss", $titlu, $descriere, $pret, $moneda, $vanzator, $stare, $locatie, $oras, $img1, $img2, $img3, $img4, $img5, $img6, $img7, $img8, $telefon, $id_utilizator, $data_adaugarii);

if ($stmt->execute()) {
    // Anunțul a fost adăugat cu succes
    echo "success";
} else {
    echo "Eroare: " . $sql . "<br>" . $conn->error;
}

$stmt->close();
$conn->close();
?>
