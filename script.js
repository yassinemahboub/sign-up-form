document.getElementById("myForm").addEventListener("submit", function(event) {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    
    if (password !== confirmPassword) {
      event.preventDefault(); // Prevent form submission
      alert("Passwords do not match. Please try again.");
    }
  });
  
