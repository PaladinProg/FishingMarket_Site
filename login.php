<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Fish ON | Авторизация</title>
    <link rel="stylesheet" href="css/common.css" />
    <link rel="stylesheet" href="css/auth.css" />
</head>
<body onload="cartitemcount();">
       <!--Шапка сайта-->
    <header>
        <div class="flex-container logo">
            <h1 class="size-logo">Cеть рыболовных магазинов <br> Fish ON</h1>
            <img class="size-logo" src="image/header/logo.png" alt="Logotype" />
            <div class="size-logo">
                <div class="info">
                    <img src="image/header/map.png" alt="map" />
                    <p>Московский проспект, 73</p>
                    <div class="clearfix"></div>
                </div>
                <div class="info phone">
                    <img src="image/header/call.png" alt="phone" />
                    <p>+7 (961) 334-73-29</p>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
        <div class="navigation">
            <ul class="flex-container nav">
                <li><a href="index.html" style="display: block;">Главная</a></li>
                <li><a href="catalog.html" style="display: block;">Каталог</a></li>
                <li><a href="gallery.html" style="display: block;">Галерея</a></li>
                <li><a href="comments.html" style="display: block;">Отзывы</a></li>
                <li><a href="contact.html" style="display: block;">Контакты</a></li>
                <li class="flex-container cart">
                    <div class="one">
                        <a href="cart.html" style="display: block;">Корзина</a>
                    </div>
                    <div class="two" id="itemcount">
                        <p>0</p>
                    </div>
                </li>
                <li><a href="login.php" style="display: block;">Авторизация</a></li>
            </ul>
        </div>
    </header>
          <div class="auth">
        <div class="form-auth">
            <?php
                if (isset($_GET["val"])) echo "<script>alert('Неверный логин или пароль');</script>" ;
            ?>
            <form class="form" action="valid_log.php" method="GET">
                <div class="text">Вход</div><br>
                Имя пользователя<br><input name="name"><br>
                Пароль<br><input type="password" name="password"><br>
                <input type="submit" value="Вход"><br>
                <a href="#" style="color: #FFF">Не удается войти?</a><br>
                Нет аккаунта? <a href="register.php" style="color: #FFF">Регистрация</a><br>
            </form>
        </div>
        <!--Подвал сайта-->
    <footer class="flex-container foot">
        <div class="block-foot about">
            <p>&copy All rights reserved. 2019</p>
            <p>Нас уже посетили: 328 человек</p>
        </div>
        <div class="block-foot link">
            <p>Мы в социальных сетях:</p>
            <div class="flex-container social">
                <a href="#"><img src="image/footer/FB.png" alt="FB"></a>
                <a href="#"><img src="image/footer/G.png" alt="Google"></a>
                <a href="#"><img src="image/footer/t.png" alt="twitter"></a>
                <a href=""><img src="image/footer/vk.png" alt="Vk"></a>
            </div>
        </div>
        <div class="block-foot foot-nav">
            <ul>
                <li><a href="index.html">Главная</a></li>
                <li><a href="menu.html">Меню</a></li>
                <li><a href="gallery.html">Галерея</a></li>
                <li><a href="comments.html">Отзывы</a></li>
                <li><a href="contact.html">Контакты</a></li>
            </ul>
        </div>
    </footer>
</body>
</html>