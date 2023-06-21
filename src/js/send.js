function sendForm(event) {
    event.preventDefault();
  
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
  
    var webhookUrl = 'https://discord.com/api/webhooks/1121026381283864657/GTJ1LIgD34Q5OPwRtPgrfUcOGkfEGq6N5AO4QAPI8dib1t-Hg0FSteUyzKBQPGnc9B2A';
    var timestamp = new Date().toISOString();
    var formattedMessage = `\n\n${message}`;
  
    var payload = {
      content: '',
      tts: false,
      embeds: [
        {
          type: 'rich',
          title: subject,
          description: formattedMessage,
          color: 0x00FFFF,
          footer: {
            text: `From: ${email}` // Display "From: Name" in the footer
          },
          timestamp: timestamp // Set the timestamp to the current time
        }
      ]
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
          showNotification('Message sent successfully!');
          clearForm();
        } else {
          // Error handling if the request fails
          showNotification('Failed to send message.');
        }
      })
      .catch(error => {
        // Error handling for network or other issues
        showNotification('Failed to send message.');
      });
  }
  
  
  function showNotification(message) {
    var notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(function() {
      notification.style.display = 'none';
    }, 3000);
  }
  
  function clearForm() {
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
  }