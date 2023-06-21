function sendForm(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
  
    var webhookUrl = 'https://discord.com/api/webhooks/1121026381283864657/GTJ1LIgD34Q5OPwRtPgrfUcOGkfEGq6N5AO4QAPI8dib1t-Hg0FSteUyzKBQPGnc9B2A';
    var payload = {
      embeds: [
        {
          title: 'New message received from the contact form',
          fields: [
            {
              name: 'Name',
              value: name
            },
            {
              name: 'Email',
              value: email
            },
            {
              name: 'Subject',
              value: subject
            },
            {
              name: 'Message',
              value: message
            }
          ],
          footer: {
            text: 'You have received a new message!'
          }
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
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
  }