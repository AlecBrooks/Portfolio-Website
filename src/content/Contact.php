<div id="MyContent">
    <?php include 'PHPMailer/process_form.php'?>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
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
                    <input type="submit" name="submit" value="Send">
                    <div class="g-recaptcha" data-sitekey="6Lc1hvokAAAAADpWpO6GFm1qbY4j0tqRyC9LOVTD"></div>
                    <?php echo $alert; ?>
                </form>
            </li>
        </ul>
    </main>

    <script type="text/javascript">
  var onloadCallback = function() {
    alert("grecaptcha is ready!");
  };
    </script>

</div>
