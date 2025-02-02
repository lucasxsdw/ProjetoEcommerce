<?php
$host = "localhost"; 
$user = "root"; 
$password = "lucas123"; 
$database = "sistema_login"; 

$conn = mysqli_connect($host, $user, $password, $database);

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

if (!$conn) {
    die("Falha na conexão: " . mysqli_connect_error());
}
?>
