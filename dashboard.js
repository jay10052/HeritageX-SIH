window.onload = function() {
    const user = JSON.parse(localStorage.getItem('heritageUser'));
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!user || isLoggedIn !== 'true') {
        window.location.href = "login.html";
        return;
    }
    const userNameElement = document.getElementById('userName');
    if (userNameElement) {
        userNameElement.textContent = user.username;
    }
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.onclick = function() {
            localStorage.removeItem('isLoggedIn');
            window.location.href = "login.html";
        };
    }
};