<?php
    $login = "";
    $password = "";
    if(isset($_GET["name"])) $login = $_GET["name"];
    if(isset($_GET["password"])) $password = $_GET["password"];
    
    $xml = simplexml_load_file("xml/users.xml");
            foreach ($xml->user as $val) {
                if($val->login == $login&&$val->password==$password){
                    $val->token = uniqid();
                    $xml->saveXML("xml/users.xml");
                    setcookie("Token",$val->token);
                    header("Location: login.php");
                    exit;
                }
            }
            header("Location: login.php?val=false");
?>