// Guardar el título original de la página
const originalTitle = document.title;

// Evento que detecta cuando la visibilidad de la pestaña cambia
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Si el usuario cambia de pestaña, cambiar el título
        document.title = '¡Vuelve pronto! 😢';
    } else {
        // Cuando el usuario regresa a la pestaña, restaurar el título original
        document.title = originalTitle;
    }
});