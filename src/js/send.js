document.addEventListener("DOMContentLoaded", function() {
    // Code to be executed after the DOM is fully loaded
  
    var contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
    
      // Get form values
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var subject = document.getElementById("subject").value;
      var message = document.getElementById("message").value;
    
      // Display form values
      console.log("Name: " + name);
      console.log("Email: " + email);
      console.log("Subject: " + subject);
      console.log("Message: " + message);
    });
  });