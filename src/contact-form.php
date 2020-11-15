<?php

/* Задаем переменные */
$name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$tel = htmlspecialchars($_POST["tel"]);
$message = htmlspecialchars($_POST["message"]);
$bezspama = htmlspecialchars($_POST["bezspama"]);

/* Ваш адрес и тема сообщения */
$address = "oxanadu@yandex.ru";
$sub = "Сообщение с сайта ХХХ";

/* Формат письма */
$mes = "Сообщение с сайта ХХХ.\n
Имя отправителя: $name 
Электронный адрес отправителя: $email
Телефон отправителя: $tel
Сайт отправителя: $website
Текст сообщения:
$message";


if (empty($bezspama)) /* Оценка поля bezspama - должно быть пустым*/
{
/* Отправляем сообщение, используя mail() функцию */
$from  = "From: $name <$email> \r\n Reply-To: $email \r\n";
if (mail($address, $sub, $mes, $from)) {
    header('Refresh: 5; URL=https://biznessystem.ru');
    echo '
    
    Письмо отправлено, через 5 секунд вы вернетесь на страницу XXX%MINIFYHTML195e8e54c6f5e33091fbd8cfdb84f6ac13%';}
else {
    header('Refresh: 5; URL=https://biznessystem.ru');
    echo '
    
    Письмо не отправлено, через 5 секунд вы вернетесь на страницу YYY';}
}
exit; /* Выход без сообщения, если поле bezspama заполнено спам ботами */
?>