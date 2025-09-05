// script.js
// Purpose: Add interactivity and custom form validation

// ------------------------------
// Feature 1: Interactive Counter
// ------------------------------
const counterDisplay = document.getElementById("counter");
const increaseBtn = document.getElementById("increase-btn");

let count = 0;

// Increase counter when button is clicked
increaseBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

// ------------------------------
// Feature 2: Toggle Password Visibility
// ------------------------------
const passwordInput = document.getElementById("password");
const togglePasswordBtn = document.getElementById("toggle-password");

togglePasswordBtn.addEventListener("click", () => {
  // Toggle between password and text input
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordBtn.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    togglePasswordBtn.textContent = "Show";
  }
});

// ------------------------------
// Custom Form Validation
// ------------------------------
const form = document.getElementById("signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form from submitting

  // Get form values
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = passwordInput.value.trim();

  // Error message elements
  const usernameError = document.getElementById("username-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  let isValid = true;

  // Validate username
  if (username.length < 3) {
    usernameError.textContent = "Username must be at least 3 characters long.";
    isValid = false;
  } else {
    usernameError.textContent = "";
  }

  // Validate email
  if (!email.includes("@") || !email.includes(".")) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate password
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // If form is valid, show success message
  if (isValid) {
    alert("Form submitted successfully!");
    form.reset(); // Clear form
  }
});
