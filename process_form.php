<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $to = "alec@brooksdev.org";
    $headers = "From: $email";
    $message_body = "Name: $name\nEmail: $email\nSubject: $subject\n\n$message";
    mail($to, $subject, $message_body, $headers);
}
?>