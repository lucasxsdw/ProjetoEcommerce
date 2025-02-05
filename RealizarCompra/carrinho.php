<?php
session_start();


if (isset($_SESSION['carrinho']) && is_array($_SESSION['carrinho']) && count($_SESSION['carrinho']) > 0) {
    echo "<h2>Itens no Carrinho:</h2>";


    foreach ($_SESSION['carrinho'] as $item) {
        if (is_array($item)) { 
            echo "<div style='border: 1px solid #ccc; margin-bottom: 10px; padding: 10px;'>";
            echo "<img src='/ProjetoEcommerce/img/minimalist-oversized-t-shirt-in-brown.png" . htmlspecialchars($item['imagem']) . "' alt='" . htmlspecialchars($item['nome']) . "' width='100'>";
            echo "<p>Nome: " . htmlspecialchars($item['nome']) . "</p>";
            echo "<p>Preço: " . htmlspecialchars($item['preco']) . "</p>";
            echo "</div>";
        } else {
            echo "<p>Erro: Item inválido no carrinho.</p>";
        }
    }
} else {
      echo "<h2>Seu carrinho está vazio.</h2>";
}

    
?>
