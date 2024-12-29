const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Configuración de partículas para el modo claro
const particlesConfigLight = {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#000000" }, // Partículas negras
        size: { value: 2, random: true }, // Tamaño aleatorio para las partículas
        shape: { type: "circle" }, // Forma de partículas como círculos (puntos)
        line_linked: { enable: false }, // Desactiva las líneas de conexión
        move: { 
            enable: true, 
            speed: 2, 
            out_mode: "out" 
        },
    }
};

// Configuración de partículas para el modo oscuro
const particlesConfigDark = {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" }, // Partículas blancas
        size: { value: 2, random: true }, // Tamaño aleatorio para las partículas
        shape: { type: "circle" }, // Forma de partículas como círculos (puntos)
        line_linked: { enable: false }, // Desactiva las líneas de conexión
        move: { 
            enable: true, 
            speed: 2, 
            out_mode: "out" 
        },
    }
};

// Cargar configuración inicial de partículas
function loadParticles(theme) {
    if (theme === 'dark-mode') {
        particlesJS("particles-js", particlesConfigDark);
    } else {
        particlesJS("particles-js", particlesConfigLight);
    }
}

// Función para establecer el modo claro u oscuro
function setTheme(mode) {
    if (mode === 'dark-mode') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark-mode'); // Guardar en localStorage
        loadParticles('dark-mode'); // Cargar partículas para modo oscuro
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light-mode'); // Guardar en localStorage
        loadParticles('light-mode'); // Cargar partículas para modo claro
    }
}

// Alternar el modo entre claro y oscuro al hacer clic
themeToggleButton.addEventListener('click', () => {
    const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    const newTheme = currentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    setTheme(newTheme);
});

// Al cargar la página, establecer el tema guardado en localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light-mode'; // Modo predeterminado
    setTheme(savedTheme); // Aplica el tema guardado
});

// Detectar el scroll y ajustar el zoom de las partículas
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // Distancia desplazada desde la parte superior
    const zoomFactor = 2 + scrollY / 800; // Ajusta la rapidez del zoom según el desplazamiento

    // Actualizar el tamaño de las partículas según el scroll
    const currentConfig = body.classList.contains('dark-mode') ? particlesConfigDark : particlesConfigLight;

    currentConfig.particles.size.value = zoomFactor;

    // Elimina las líneas de conexión al ajustar en tiempo real
    currentConfig.particles.line_linked.enable = false;

    // Actualizar la configuración de partículas en tiempo real
    particlesJS("particles-js", currentConfig);
});