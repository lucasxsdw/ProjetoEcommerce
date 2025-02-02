<?php
include "conexao.php";

error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "Início do processamento <br>";


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    echo "Formulário enviado <br>";

    
    if (!$conn) {
        die("Erro ao conectar ao banco de dados: " . mysqli_connect_error());
    }

    
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $senha = $_POST['senha']; 

    $query = "SELECT * FROM usuarios WHERE email = ?";
    $stmt = mysqli_prepare($conn, $query);

    if (!$stmt) {
        die("Erro na preparação da consulta: " . mysqli_error($conn));
    }

    mysqli_stmt_bind_param($stmt, "s", $email);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    if ($result && mysqli_num_rows($result) > 0) {
        echo "Usuário encontrado... <br>";
        $usuario = mysqli_fetch_assoc($result);

        
        if (password_verify($senha, $usuario['senha'])) {
            echo "✅ Login realizado com sucesso!";
            
        } else {
            echo "❌ Email ou senha inválidos!";
        }
    } else {
        echo "❌ Nenhum usuário encontrado com esse email.";
    }

    
    mysqli_stmt_close($stmt);
    mysqli_close($conn);
    
    exit(); 
}
?>