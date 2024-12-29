// Esperar a que la página cargue completamente
window.onload = function() {
    // Mostrar el loader durante 2 segundos al cargar la página
    setTimeout(function() {
        // Ocultar el loader
        document.getElementById('loader').style.display = 'none';
        // Mostrar el contenido de la página (Inicio)
        document.getElementById('content').style.display = 'block';
    }, 2000); // 2 segundos de retraso

    // Función para simular ir al "Inicio"
    document.getElementById('inicioButton').addEventListener('click', function() {
        // Mostrar el loader antes de redirigir o cargar el contenido
        document.getElementById('loader').style.display = 'flex';
        document.getElementById('content').style.display = 'none';

        // Simular la carga de "Inicio" y después de 3 segundos, ocultar el loader
        setTimeout(function() {
            document.getElementById('loader').style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }, 3000); // Simulación de carga
    });
};