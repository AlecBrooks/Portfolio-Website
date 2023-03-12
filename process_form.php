<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $from = $_POST['from'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Use headers to set the Reply-To and MIME type
    $headers = array(
        'Reply-To: ' . $from,
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=UTF-8',
        'From: ' . $from
    );

    // Set the additional parameters for sendmail, including the -f flag with the From address
    $additional_parameters = '-f ' . $from;

    // Send the email using the mail() function with the additional parameters
    if (mail('alec@brooksdev.org', $subject, $message, implode("\r\n", $headers), $additional_parameters)) {
        echo 'Email sent successfully.';
    } else {
        echo 'Email could not be sent.';
    }
}
?>