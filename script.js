const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Clear previous errors
  document.getElementById('usernameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';
  document.getElementById('confirmPasswordError').textContent = '';

  let isValid = true;

  if (username.length < 3) {
    document.getElementById('usernameError').textContent = 'Name must be at least 3 characters';
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Enter a valid email';
    isValid = false;
  }

  if (password.length < 6) {
    document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
    isValid = false;
  }

  if (password !== confirmPassword) {
    document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
    isValid = false;
  }

  if (isValid) {
    alert('Registration successful!');
    form.reset();
  }
});
