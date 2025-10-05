document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');
  const user = JSON.parse(localStorage.getItem('heritageUser'));
  if (!username || !password) {
    errorMsg.textContent = "Please enter both username and password.";
    errorMsg.style.color = "#DC143C";
    return;
  }
  if (user && (username === user.username || username === user.email) && password === user.password) {
    errorMsg.style.color = "#00FF00";
    errorMsg.textContent = "Login successful!";
    localStorage.setItem('isLoggedIn', 'true');
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  } else {
    errorMsg.style.color = "#DC143C";
    errorMsg.textContent = "Invalid username or password.";
  }
});