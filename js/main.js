// Verifica la autenticación al cargar la página
checkAuth();

// Datos de ejemplo para las aplicaciones
const apps = [
    { name: 'App 1', url: 'https://script.google.com/macros/s/.../exec' },
    { name: 'App 2', url: 'https://script.google.com/macros/s/.../exec' },
    // Añade más aplicaciones según sea necesario
];

function createAppMenu() {
    const appGrid = document.getElementById('app-grid');
    apps.forEach(app => {
        const appElement = document.createElement('div');
        appElement.className = 'app-item';
        appElement.innerHTML = `
            <h3>${app.name}</h3>
            <button onclick="openApp('${app.url}')">Abrir</button>
        `;
        appGrid.appendChild(appElement);
    });
}

function createSidebar() {
    const sidebar = document.getElementById('sidebar');
    apps.forEach(app => {
        const appLink = document.createElement('a');
        appLink.href = '#';
        appLink.textContent = app.name;
        appLink.onclick = () => openApp(app.url);
        sidebar.appendChild(appLink);
    });
    
    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Cerrar Sesión';
    logoutButton.onclick = logout;
    sidebar.appendChild(logoutButton);
}

function openApp(url) {
    console.log(`Abriendo aplicación: ${url}`);
    // Implementa la lógica para cargar la aplicación aquí
}

createAppMenu();
createSidebar();
