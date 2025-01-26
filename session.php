<?php

 session_start();

 $_SESSION["produto"] = "camisa, calça, sapato";


 echo $_SESSION["produto"] ;


 session_destroy();
?>