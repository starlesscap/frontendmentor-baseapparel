var email = document.querySelector("#email");
var form = document.querySelector("#form");
var error = document.querySelector("small");
var error_msg = "Please provide a valid email.";

// Create error exclamation point
function exclaim () {
  document.querySelector(".email_type").className += ' error_exclaim';
}


// Checks if email is valid

email.addEventListener('input', function (event) {
  if (email.validity.valid) {
    error.textContent = "";
  }
  else {
    error.textContent=error_msg;
    // exclaim();

  }
});

// Submit form if email is valid
form.addEventListener('submit', function (event) {
  if(!email.validity.valid) {
    error.textContent=error_msg;
    exclaim();
    event.preventDefault();
  }
});
