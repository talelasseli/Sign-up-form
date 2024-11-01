// Get form elements
// Get form elements
const form = document.getElementById("form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const errorElement = document.getElementById("errorMessage");

// Add submit event listener to form
form.addEventListener("submit", (e) => {
  // Prevent form from submitting by default
  e.preventDefault();

  // Clear any existing error messages
  errorElement.textContent = "";
  errorElement.style.color = "red";
  errorElement.style.marginLeft = "15px";

  let messages = [];

  // Check if passwords are empty
  if (password.value === "" || confirmPassword.value === "") {
    messages.push("Password fields cannot be empty");
  }
  // Check if passwords match
  else if (password.value !== confirmPassword.value) {
    messages.push("Passwords do not match!");
    password.style.borderColor = "red";
    confirmPassword.style.borderColor = "red";
  }

  // If there are errors, display them
  if (messages.length > 0) {
    errorElement.textContent = messages.join(", ");
  } else {
    // If no errors, reset borders and submit
    password.style.borderColor = "#e5e7eb";
    confirmPassword.style.borderColor = "#e5e7eb";
    form.submit();
  }
});

// Add input event listeners to reset borders when user starts typing
password.addEventListener("input", () => {
  password.style.borderColor = "#e5e7eb";
  confirmPassword.style.borderColor = "#e5e7eb";
  errorElement.textContent = "";
});

confirmPassword.addEventListener("input", () => {
  password.style.borderColor = "#e5e7eb";
  confirmPassword.style.borderColor = "#e5e7eb";
  errorElement.textContent = "";
});
