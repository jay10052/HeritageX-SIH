window.onload = function() {
  const user = JSON.parse(localStorage.getItem('heritageUser'));
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (!user || isLoggedIn !== 'true') {
    window.location.href = "login.html";
    return;
  }
  document.getElementById('userName').textContent = user.username;

  document.getElementById('logoutBtn').onclick = function() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = "login.html";
  };
};