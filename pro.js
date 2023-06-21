// Form validation
function validateForm() {
    var name = document.forms["my-form"]["name"].value;
    var email = document.forms["my-form"]["email"].value;
    var subject = document.forms["my-form"]["subject"].value;
    var message = document.forms["my-form"]["message"].value;

    if (name == "") {
      alert("Name must be filled out");
      return false;
    }

    if (email == "") {
      alert("Email must be filled out");
      return false;
    }

    if (subject == "") {
      alert("Subject must be filled out");
      return false;
    }

    if (message == "") {
      alert("Message must be filled out");
      return false;
    }
  }

  // Form submission
  document
    .getElementById("my-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var subject = document.getElementById("subject").value;
      var message = document.getElementById("message").value;
      alert("Thank you for submitting the form!");
    });