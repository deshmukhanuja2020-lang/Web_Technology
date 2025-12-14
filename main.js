document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    
    if (username === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }
    
    // Simple demo validation (in real apps, this would be server-side)
    if (username === 'admin' && password === 'password') {
        alert('Login successful! Welcome, ' + username);
        // Redirect or perform action here
        // window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password. Try username: admin, password: password');
    }
});