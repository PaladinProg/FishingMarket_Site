<?php
    $login = "";
    $password1 = "";
    $password2 = "";
    if(isset($_GET["login"])) $login = $_GET["login"];
    if(isset($_GET["password1"])) $password1 = $_GET["password1"];
    if(isset($_GET["password2"])) $password2 = $_GET["password2"];
    if($password1!=$password2) {
        header("Location: register.php?val=wp");
        exit;
    }
    if($password1 == ""){
        header("Location: register.php?val=lp");
        exit;
    }
    if($login == ""){
        header("Location: register.php?val=ll");
        exit;
    }
    if(!preg_match('/^(?=.*\d)(?=.*[A-Za-z])[0-9A-Za-z!@#$%]{8,12}$/', $password1)){
        header("Location: register.php?val=bp");
        exit;
    }
    if(!preg_match('/^(?=.*\d)(?=.*[A-Za-z])[0-9A-Za-z!@#$%]{8,16}$/', $password1)){
        header("Location: register.php?val=bl");
        exit;
    }

    $xml = simplexml_load_file("xml/users.xml");
            foreach ($xml->user as $val) {
                if($val->login == $login){
                    header("Location: register.php?val=wl");
                    exit;
                }
            }
    $token = uniqid();
    $user = $xml->addChild("user");
    $user->addChild("login",$login);
    $user->addChild("password",$password1);
    $user->addChild("token",$token);
    setcookie("Token",$token);
    $xml->saveXML("xml/users.xml");
    header("Location: index.php");
    exit;
?>