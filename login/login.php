<?php

include "conexao.php";

error_reporting(E_ALL);
ini_set('DISPLAY_ERRORS', 1);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $senha = mysqli_real_escape_string($conn, $_POST['senha']);

    
    $query = "SELECT * FROM usuarios WHERE email = ?";
    $stmt = mysqli_prepare($conn, $query);
    mysqli_stmt_bind_param($stmt, "s", $email);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    if (mysqli_num_rows($result) > 0) {
       $usuario = mysqli_fetch_assoc($result);


       if (password_verify($senha, $usuario['senha'])) {
              echo "Login realizado com sucesso";
       }else{
           echo "Email ou senha invalido";
       }
       
    }


    mysqli_stmt_close($stmt);
    mysqli_close($conn);
     
   
}




?>