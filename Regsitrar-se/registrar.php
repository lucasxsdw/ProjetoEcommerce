<?php
include("conexao.php");

error_reporting(E_ALL);
ini_set('display_errors', 1); 

if ($_SERVER['REQUEST_METHOD'] == 'POST') { 
    
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $senha = mysqli_real_escape_string($conn, $_POST['senha']);

    
    $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

    $query = "SELECT * FROM usuarios WHERE email = ?";
    $stmt = mysqli_prepare($conn, $query);
    mysqli_stmt_bind_param($stmt, "s", $email);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    if (mysqli_num_rows($result) > 0) {
        echo "Email já cadastrado!";
    } else {
        $query = "INSERT INTO usuarios (email, senha) VALUES (?, ?)";
        $stmt = mysqli_prepare($conn, $query);
        mysqli_stmt_bind_param($stmt, "ss", $email, $senhaHash);

        if (mysqli_stmt_execute($stmt)) {
            
            echo "Usuário registrado com sucesso!";
        } else {
            echo "Erro ao registrar o usuário: " . mysqli_error($conn);
        }
    }

    mysqli_stmt_close($stmt);
    mysqli_close($conn);
}
?>
