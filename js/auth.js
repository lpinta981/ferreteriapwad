async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function verifyCredentials(username, password) {
    const hashedPassword = await sha256(password);
    // Aquí deberías hacer una solicitud a tu API de Google Sheets para verificar las credenciales
    // Por ahora, usaremos una verificación de ejemplo
    return username === 'usuario_ejemplo' && hashedPassword === 'hash_ejemplo';
}

async function login(username, password) {
    const isValid = await verifyCredentials(username, password);
    if (isValid) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'index.html';
    } else {
        alert('Credenciales inválidas');
    }
}

function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn && window.location.pathname !== '/login.html') {
        window.location.href = 'login.html';
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
}
