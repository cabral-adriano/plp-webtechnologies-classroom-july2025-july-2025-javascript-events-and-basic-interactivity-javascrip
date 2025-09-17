// =============================
// Part 1: Event Handling
// =============================
document.getElementById("clickBtn").addEventListener("click", function () {
  document.getElementById("clickMsg").textContent = " Button clicked!";
});

// =============================
// Part 2: Interactive Features
// =============================

// Light/Dark Mode
document.getElementById("toggleThemeBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Counter
let counter = 0;
document.getElementById("incrementBtn").addEventListener("click", function () {
  counter++;
  document.getElementById("counter").textContent = counter;
});
document.getElementById("decrementBtn").addEventListener("click", function () {
  counter--;
  document.getElementById("counter").textContent = counter;
});

// Collapsible FAQ
document.querySelector(".faq-question").addEventListener("click", function () {
  let answer = document.querySelector(".faq-answer");
  answer.style.display = answer.style.display === "block" ? "none" : "block";
});

// =============================
// Part 3: Form Validation
// =============================
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop form submission

  let valid = true;

  // Grab inputs
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  // Name validation
  if (name.length < 3) {
    valid = false;
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation (basic regex)
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    valid = false;
    document.getElementById("emailError").textContent = "Enter a valid email address.";
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  if (password.length < 6) {
    valid = false;
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Success message
  if (valid) {
    document.getElementById("formSuccess").textContent = "✅ Form submitted successfully!";
    document.getElementById("signupForm").reset();
  }
})