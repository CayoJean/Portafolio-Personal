// Guardar el título original de la página
const originalTitle = document.title;
let titleInterval;

// Evento que detecta cuando la visibilidad de la pestaña cambia
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Mensajes que quieres mostrar
        const messages = ['¡Vuelve Pronto! 😢', '¡Te Extraño! ❤️'];
        let index = 0;

        // Cambiar el título inmediatamente al salir
        document.title = messages[0];

        // Crear un intervalo para que los mensajes roten cada 2 segundos
        titleInterval = setInterval(() => {
            index = (index + 1) % messages.length;
            document.title = messages[index];
        }, 2000); 

    } else {
        // Cuando el usuario regresa, detenemos el intervalo y restauramos el título original
        clearInterval(titleInterval);
        document.title = originalTitle;
    }
});