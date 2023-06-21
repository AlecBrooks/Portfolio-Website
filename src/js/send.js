function sendForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
  
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);
  
    var webhookUrl = 'YOUR_DISCORD_WEBHOOK_URL';
    var payload = {
      content: `
        New message received from the contact form:
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `
    };
  
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(response => {
        if (response.ok) {
          // Success! The message has been sent to your Discord server.
        } else {
          // Error handling if the request fails
        }
      })
      .catch(error => {
        // Error handling for network or other issues
      });
  
    // You can add further code here to process or display the form data as needed
  }