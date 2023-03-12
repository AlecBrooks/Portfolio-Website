<?php include 'PHPMailer/process_form.php'?>
<!DOCTYPE html>
<html>
<head>
    <title>About Me | Alec Brooks</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="src/style.css">
    <link rel="icon" href="">
</head>
<body>
    <!-- Navigation Bar -->
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Intro</a></li>
                <li><a href="portfolio.html">Data Analysis Projects</a></li>
                <li><a href="blog.html">Programing Projects</a></li>
                <li><a href="contact.php">Contact</a></li>
            </ul>
        </nav>
    </header>
    <!-- Main Content -->
    <main>
        <ul class="ContactUl">
            <li class="contactmeBox">
                <form action="" method="post">

                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required><br>

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required><br>

                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required><br>

                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="15" cols="70"></textarea></textarea><br>

                    <input type="submit" name="submit" value="Submit">

                    <div class="sendStatus"><?php echo $alert; ?></div>

                </form>
            </li>
        </ul>
    </main>
    <!-- Footer -->
    <footer>
        <div>Alec@brooksdev.org<br></br>
        powered by notepad.exe
        </div>
        <p>&copy; 2023 Alec Brooks. All rights