<?php
$host = "localhost"; 
$user = "root"; 
$password = "lucas123"; 
$database = "sistema_login"; 

$conn = mysqli_connect($host, $user, $password, $database);

if (!$conn) {
    die("Falha na conexão: " . mysqli_connect_error());
}
?>
