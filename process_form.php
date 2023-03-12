<?php
// Set the recipient email address
$to = "alec@brooksdev.org";

// Set the sender email address
$from = "sender@gmail.com";

// Set the sender name
$fromName = "Senter Name";

// Set the email subject
$subject = "Test";

// Set the email message
$message = "Hello this is a test email";

// Set the Gmail account username and password
$username = "alec@brooksdev.org";
$password = "Tolkien0194";

// Set the SMTP host of Gmail
$host = "smtp.gmail.com";

// Set the SMTP port of Gmail
$port = "587";

// Include the PHPMailer Autoload.php file
require 'vendor/autoload.php';

// Create a new PHPMailer instance
$mail = new PHPMailer\PHPMailer\PHPMailer();

// Set PHPMailer to use SMTP
$mail->isSMTP();

// Enable SMTP debugging
$mail->SMTPDebug = 0;

// Set SMTP authentication
$mail->SMTPAuth = true;

// Set the encryption type to TLS
$mail->SMTPSecure = "tls";

// Set the Gmail account username and password
$mail->Username = $username;
$mail->Password = $password;

// Set the SMTP host and port
$mail->Host = $host;
$mail->Port = $port;

// Set the sender email and name
$mail->setFrom($from, $fromName);

// Set the recipient email
$mail->addAddress($to);

// Set the email subject and message body
$mail->Subject = $subject;
$mail->Body = $message;

// Send the email
if(!$mail->send()) {
    // If the email failed to send, output an error message
    echo "Email could not be sent. Error: " . $mail->ErrorInfo;
} else {
    // If the email was sent successfully, output a success message
    echo "Email sent successfully!";
}
?>