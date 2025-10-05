document.getElementById('createForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('newUsername').value.trim();
  const email = document.getElementById('newEmail').value.trim();
  const password = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const msg = document.getElementById('createMsg');

  if (!username || !email || !password || !confirmPassword) {
    msg.textContent = "Please fill all fields.";
    msg.style.color = "#DC143C";
    return;
  }
  // Simple email format check
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    msg.textContent = "Please enter a valid email address.";
    msg.style.color = "#DC143C";
    return;
  }
  if (password.length < 6) {
    msg.textContent = "Password must be at least 6 characters.";
    msg.style.color = "#DC143C";
    return;
  }
  if (password !== confirmPassword) {
    msg.textContent = "Passwords do not match.";
    msg.style.color = "#DC143C";
    return;
  }
  localStorage.setItem('heritageUser', JSON.stringify({ username, email, password }));
  // Dummy success message 
  msg.textContent = "Account created successfully!";
  msg.style.color = "#00FF00";
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1200);
});