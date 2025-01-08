document.addEventListener('DOMContentLoaded', function() {
    // Esperar a que la página cargue completamente
    setTimeout(function() {
        // Ocultar el loader después de 3.5 segundos
        document.getElementById('loader').style.display = 'none';
    }, 3500); // 3.5 segundos de retraso
});