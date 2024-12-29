// Seleccionar el botón
const scrollToTopButton = document.getElementById('scrollToTop');

// Mostrar el botón solo cuando se hace scroll hacia abajo
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Mostrar después de desplazarse 300px
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

// Agregar funcionalidad para desplazarse hacia arriba
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0, // Posición superior de la página
        behavior: 'smooth' // Desplazamiento suave
    });
});