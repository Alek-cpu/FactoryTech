<?php
$name = $_POST['userName'];
$phone = $_POST['userPhone'];
$token = "1270251657:AAEbn-C3vq8QrQb8RmnfHAcEnWiEFsUykKI";
$chat_id = "-225423257";

$arr = array(
    'Имя пользователя: ' => $name,
    'Телефон пользователя: ' => $phone
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if ($sendToTelegram) {
    header('Location: index.html');
} else {
    header('Location: index.html');
}
?>