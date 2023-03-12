<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $from = $_POST['from'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Use headers to set the From, Reply-To, and MIME type
    $headers = array(
        'From: ' . $from,
        'Reply-To: ' . $from,
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=UTF-8'
    );

    // Send the email using the mail() function
    if (mail('alec@brooksdev.org', $subject, $message, implode("\r\n", $headers))) {
        echo 'Email sent successfully.';
    } else {
        echo 'Email could not be sent.';
    }
}
?>
