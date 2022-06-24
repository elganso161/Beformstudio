<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru','phpmailer/language');
$mail->IsHTML(true)


$mail->setForm('utka_45@mail.ru','') //от кого ..
$mail->addAddress('elganso45@gmail.com') //кому отправить ..
$mail->Subject = ('тест формы') //тема письма ..

//тело письма
if(trim(!empty($_POST['user_name']))){
  $body. = '<p>Имя:'$_POST['user_name']'</p>'
}
if(trim(!empty($_POST['user_email']))){
  $body. = '<p>Email:'$_POST['user_email']'</p>'
}
if(trim(!empty($_POST['user_phone']))){
  $body. = '<p>Phone:'$_POST['user_phone']'</p>'
}
if(trim(!empty($_POST['user_message']))){
  $body. = '<p>Message:'$_POST['user_message']'</p>'
}

$mail->Body=$body;

//Отправляем

if(!$mail->send()){
  $message = ('ошибка')
}else{
  $message = 'данные отправлены'
}

$responce = ['message'=>$message];
header('Content-type:application/json')
echo json_endcode($responce)
?>
