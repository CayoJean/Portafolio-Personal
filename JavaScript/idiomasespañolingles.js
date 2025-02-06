const esIcon = document.getElementById('btn-es');
        const enIcon = document.getElementById('btn-en');

        // Función para guardar el idioma seleccionado en localStorage
        function guardarIdioma(idioma) {
            localStorage.setItem('idiomaSeleccionado', idioma);
        }

        // Función para cargar el idioma guardado al cargar la página
        function cargarIdiomaGuardado() {
            const idiomaGuardado = localStorage.getItem('idiomaSeleccionado');
            if (idiomaGuardado === 'es') {
                esIcon.classList.add('active');
                enIcon.classList.remove('active');
            } else if (idiomaGuardado === 'en') {
                enIcon.classList.add('active');
                esIcon.classList.remove('active');
            } else {
                // Si no hay idioma guardado, se establece el español por defecto
                esIcon.classList.add('active');
                enIcon.classList.remove('active');
                guardarIdioma('es');
            }
        }

        // Cargar el idioma guardado al cargar la página
        cargarIdiomaGuardado();

        esIcon.addEventListener('click', () => {
            if (!esIcon.classList.contains('active')) {
                esIcon.classList.add('active');
                enIcon.classList.remove('active');
                guardarIdioma('es');
                console.log("Idioma cambiado a español");
            }
        });

        enIcon.addEventListener('click', () => {
            if (!enIcon.classList.contains('active')) {
                enIcon.classList.add('active');
                esIcon.classList.remove('active');
                guardarIdioma('en');
                console.log("Idioma cambiado a inglés");
            }
        });