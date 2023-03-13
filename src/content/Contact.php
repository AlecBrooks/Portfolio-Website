<div id="MyContent">
    <?php include 'PHPMailer/process_form.php'?>
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
                    <?php echo $alert; ?>
                </form>
            </li>
        </ul>
    </main>
</div>
