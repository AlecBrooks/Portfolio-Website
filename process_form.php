<?php

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
  // Collect form data
  $to = "alec@brooksdev.org"; // Updated recipient email address
  $subject = $_POST["subject"];
  $message = $_POST["message"];
  $headers = "From: " . $_POST["email"] . "\r\n" .
             "Reply-To: " . $_POST["email"] . "\r\n" .
             "X-Mailer: PHP/" . phpversion();
  
  // Send email using PHP mail function
  if (mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully!";
  } else {
    echo "Email sending failed.";
  }
}
?>