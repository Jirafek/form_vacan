<?php
/* Здесь проверяется существование переменных */
if (isset($_POST['name'])) {$phone = $_POST['name'];}
if (isset($_POST['surname'])) {$surname = $_POST['surname'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['phone_mes'])) {$phoneMes = $_POST['phone_mes'];}
if (isset($_POST['mail'])) {$sendToMail = $_POST['mail'];}
if (isset($_POST['date'])) {$date = $_POST['date'];}
if (isset($_POST['city'])) {$city = $_POST['city'];}
if (isset($_POST['english'])) {$english = $_POST['english'];}
if (isset($_POST['money'])) {$money = $_POST['money'];}
if (isset($_POST['time'])) {$time = $_POST['time'];}
if (isset($_POST['recomend'])) {$recomend = $_POST['recomend'];}
if (isset($_POST['work'])) {$work = $_POST['work'];}
if (isset($_POST['answer'])) {$answer = $_POST['answer'];}
 
/* Сюда впишите свою эл. почту */
$myaddres  = "vladpertcev@mail.ru"; // кому отправляем
 
/* А здесь прописывается текст сообщения, \n - перенос строки */
$mes = "Тема: Новое резюме\nТелефон: $phone\nИмя: $name\nФамилия: $surname\nТелефон привязан к: $phoneMes\nE-mail: $sendToMail\nДата рождения: $date\nГород проживания: $city\nУровень английского: $english\nЖелаемый уровень зарплаты: $money\nГотов уделять на роботу: $time\nКто-то порекомендовал: $recomend\nПрофессия: $work\nОтветы на вопросы: $answer";
 
/* А эта функция занимается отправкой письма на указанный вами email */
$sub='Резюме'; //сабж
$send = mail ($myaddres,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$sendToMail");
 
ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="refresh" content="3; url=index.html">
<title>Спасибо! Мы свяжемся с вами!</title>
<meta name="generator">
<script type="text/javascript">
setTimeout('location.replace("/index.html")', 3000);
/*Изменить текущий адрес страницы через 3 секунды (3000 миллисекунд)*/
</script> 
</head>
<body>
<h1>Спасибо! Мы свяжемся с вами!</h1>
</body>
</html>