<?php
include("conexao.php");

if ($conn) {
    echo "Conexão bem-sucedida!";
} else {
    echo "Erro ao conectar ao banco de dados.";
}
?>
