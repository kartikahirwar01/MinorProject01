document.getElementById('login-form').onsubmit = function (e) {
    e.preventDefault(); // फॉर्म को सबमिट होने से रोकता है

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // डेमो के लिए सादे क्रेडेंशियल्स
    if (username === 'Kartik01' && password === 'Kartik@567890') {
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('error-msg').classList.remove('hidden');
    }
};
