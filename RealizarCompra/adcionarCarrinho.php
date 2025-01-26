<?php

 session_start();

 if (isset($_POST['produto_id'])) {
  $produto = [ 
    'id' => $_POST['produto_id'],
    'nome' => $_POST['produto_nome'],
    'preco' => $_POST['produto_preco'],
    'imagem' => $_POST['produto_imagem'],
];

      if(!isset($_SESSION['carrinho'])){
        $_SESSION['carrinho'] = [];
  }
 
  $_SESSION['carrinho'] [] = $produto;

  header('Location: carrinho.php');
  exit;
  
  
  }else{
    echo "nenhum item foi selecionado";
  }



?>