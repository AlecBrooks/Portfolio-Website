<?php include 'PHPMailer/process_form.php'?>
<!DOCTYPE html>
<html>
<head>
    <title>About Me | Alec Brooks</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="src/main.css">
	<script src="/src/colors/colors.js"></script>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
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
                <li><a href="contact.php">Contact Me</a></li>
            </ul>
        </nav>
    </header>
    <!-- Main Content -->
    <main class = "contactmeBox">
        <ul>
            <li class="post">
                <form  method="POST">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required><br>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required><br>
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required><br>
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="15" cols="70"></textarea></textarea><br>
                    <div class="g-recaptcha" data-sitekey="6Lc1hvokAAAAADpWpO6GFm1qbY4j0tqRyC9LOVTD" required></div>
                    <input type="submit" name="submit" value="Send">
                    <?php echo $alert; ?>
                </form>
            </li>
        </ul>
    </main>
    <!-- Footer -->
    <footer>
		Alec@brooksdev.org<br></br>
		powered by notepad.exe
		<p>&copy; 2023 Alec Brooks. All rights reserved.</p>
	</footer>
</body>

<script type="text/javascript">
  var onloadCallback = function() {
    alert("grecaptcha is ready!");
  };
</script>

</html>