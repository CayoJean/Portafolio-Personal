document.addEventListener('DOMContentLoaded', function () {
    // Selección del botón de hamburguesa y el menú
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Evento para abrir/cerrar el menú y cambiar el ícono
    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active'); // Alterna la clase "active" para mostrar/ocultar el menú
        menuToggle.classList.toggle('active'); // Cambia el ícono entre hamburguesa y "X"
    });

    // Evento para cerrar el menú y realizar el desplazamiento suave
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active'); // Oculta el menú al hacer clic en un enlace
            menuToggle.classList.remove('active'); // Restablece el ícono a hamburguesa

            // Desplazamiento suave a la sección seleccionada
            const target = link.getAttribute('href'); // Obtiene el ID del destino
            const section = document.querySelector(target);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});