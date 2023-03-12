<? php

use PHPMailer\PHPMailer\PHPMailer;

required_once 'src/Exception.php';
required_once 'src/PHPMailer.php';
required_once 'src/SMTP.php';

$mail = new PHPMailer(true);

@alert = '';

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    try{
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'alec@brooksdev.org';
        $mail->Password = 'fkqbphjbewmaledg';
        $mail->SMTPSecure = "tls";
        $mail->Post = '587';

        $mail->setFrom("Alec@brooksdev.org");
        $mail->addAddress("Alec@brooksdev.org");

        $mail->isHTML(true);

        $mail->Subject = 'Email From: ' . $name
        $mail->$Body = "Name: $name<br>Email: $email<br>Subject: $subject<br>$message";

        $mail->send()
        $alert = "<div class='alert-success'></div><span>Message Sent!</span>";

    } catch(Exception $e){
        $alert = "<div class='alert-success'></div><span>Message Sent!</span>";
    }
}

?>