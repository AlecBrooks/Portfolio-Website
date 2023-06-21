document.addEventListener("DOMContentLoaded", function () {
    // Get form element
    var form = document.getElementById("contact-form");
  
    // Add submit event listener to the form
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
  
      // Retrieve form values
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var subject = document.getElementById("subject").value;
      var message = document.getElementById("message").value;
  
      // Display form values in the console
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Subject:", subject);
      console.log("Message:", message);
    });
  });