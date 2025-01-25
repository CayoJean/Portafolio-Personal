// Al cargar la página, verifica si hay un idioma guardado en localStorage
document.addEventListener("DOMContentLoaded", function() {
    const savedLanguage = localStorage.getItem('language') || 'es';  // Si no hay idioma guardado, se usa el español por defecto
    changeLanguage(savedLanguage);  // Aplica el idioma guardado
});

// Eventos de clic para cambiar el idioma
document.getElementById('btn-es').addEventListener('click', function() {
    changeLanguage('es');
});

document.getElementById('btn-en').addEventListener('click', function() {
    changeLanguage('en');
});

// Función para cambiar el idioma
function changeLanguage(language) {
    // Guarda el idioma seleccionado en localStorage
    localStorage.setItem('language', language);

    if (language === 'es') {
        // Cambiar a español (ejemplo)
        document.querySelectorAll('.nav-link').forEach(function(link) {
            const key = link.getAttribute('data-key');
            if (key === 'navInicio') link.innerText = '< Inicio />';
            if (key === 'navAcerca') link.innerText = '< Acerca de mí />';
            if (key === 'navHabilidades') link.innerText = '< Habilidades />';
            if (key === 'navContacto') link.innerText = '< Contactos />';
        });

        // Traducir el texto de la disponibilidad para trabajar
        const availableText = document.querySelector('[data-key="availableForWork"]');
        if (availableText) {
            availableText.innerText = 'Disponible para trabajar';
        }

        // Traducir la sección de "inicio"
        const welcomeMessage = document.querySelector('[data-key="welcomeMessage"]');
        if (welcomeMessage) {
            welcomeMessage.innerText = '¡Hola! Soy Cayo Jean👋';
        }

        const developerDescription = document.querySelector('[data-key="developerDescription"]');
        if (developerDescription) {
            developerDescription.innerText = 'Desarrollador apasionado por la tecnología, amante de la creatividad y la innovación, explorando siempre nuevos desafíos.';
        }

        const navigationHint = document.querySelector('[data-key="navigationHint"]');
        if (navigationHint) {
            navigationHint.innerText = 'Utiliza los botones de arriba 👆 para navegar por el sitio o desliza hacia abajo👇.';
        }

        const scrollDownHint = document.querySelector('[data-key="scrollDownHint"]');
        if (scrollDownHint) {
            scrollDownHint.innerText = 'Desplácese hacia abajo';
        }

        // Traducir "Acerca de mí"
        const aboutMeTitle = document.querySelector('[data-key="aboutMeTitle"]');
        if (aboutMeTitle) {
            aboutMeTitle.innerText = '< Acerca De Mí />';
        }

        const aboutMeDescription = document.querySelector('[data-key="aboutMeDescription"]');
        if (aboutMeDescription) {
            aboutMeDescription.innerText =
            "Soy un Programador Full Stack Developer Junior, con conocimientos prácticos en Front-End (HTML, CSS y JAVASCRIPT)" +
            ", Back-End (JAVA, SPRING BOOT y SPRING SECURITY) y con capacidad de entender nuevas tecnologías rápidamente " +
            "y la facultad de trabajar en un entorno de equipo. Mi viaje en el mundo de la tecnología comenzó con una fascinación " +
            "por crear soluciones que no solo funcionan de manera eficiente, sino que también brindan una experiencia de usuario convincente. " +
            "A medida que continúa mi viaje en el desarrollo Full Stack, siempre estoy buscando proyectos y oportunidades colaborativas " +
            "en los que pueda contribuir con mis habilidades y crecer tanto personal como profesionalmente. ¡Conectémonos y exploremos cómo " +
            "podemos crear algo increíble juntos!";
        }

        // Traducir "Habilidades"
        const technicalSkillsTitle = document.querySelector('[data-key="technicalSkillsTitle"]');
        if (technicalSkillsTitle) {
            technicalSkillsTitle.innerText = '< Habilidades Técnicas />';
        }


        // Traducir "Herramientas"
        const toolsTitleEs = document.querySelector('[data-key="toolsTitle"]');
        if (toolsTitleEs) {
        toolsTitleEs.innerText = 'Herramientas'; // En español
        }


        // Traducir "habilidades blandas" español
        const softSkillsTitle = document.querySelector('[data-key="softSkillsTitle"]');
        if (softSkillsTitle) {
            softSkillsTitle.innerText = 'Habilidades Blandas';
        }
        


        // Traducir "Adaptabilidad" ESPAÑOL
        const adaptabilityTitleEs = document.querySelector('[data-key="adaptabilityTitle"]');
        if (adaptabilityTitleEs) {
        adaptabilityTitleEs.innerText = 'Adaptabilidad'; // En español
        }


        // Traducir "Dedicación" ESPAÑOL
        const dedicatedTitleEs = document.querySelector('[data-key="dedicatedTitle"]');
        if (dedicatedTitleEs) {
        dedicatedTitleEs.innerText = 'Dedicado'; // En español
        }


        // Traducir "Ética Profesional" ESPAÑOL
        const professionalEthicsTitleEs = document.querySelector('[data-key="professionalEthicsTitle"]');
        if (professionalEthicsTitleEs) {
        professionalEthicsTitleEs.innerText = 'Ética Profesional'; // En español
        }



        // Traducir "Trabajo en Equipo" ESPAÑOL
        const teamworkTitleEs = document.querySelector('[data-key="teamworkTitle"]');
        if (teamworkTitleEs) {
        teamworkTitleEs.innerText = 'Trabajo en Equipo'; // En español
        }



        // Traducir "Contacto"
        const contactsTitle = document.querySelector('[data-key="contactsTitle"]');
        if (contactsTitle) {
            contactsTitle.innerText = '< Contactos />';
        }

        // Traducir Footer
        const footerCopyright = document.querySelector('[data-key="footerCopyright"]');
        if (footerCopyright) {
            footerCopyright.innerHTML = '<b>&copy; Autor: Cayo Jean &copy;</b>';
        }

        const footerRights = document.querySelector('[data-key="footerRights"]'); 
        if (footerRights) {
            footerRights.innerHTML = `&copy; Todos los Derechos Reservados &copy;`;
            //footerRights.innerText = `© Todos los Derechos Reservados 2025 ©`;// 
        }


        // Traducir Descargar CV. a español
        const downloadCVButton = document.querySelector('[data-key="downloadCV"]');
        if (downloadCVButton) {
            downloadCVButton.innerText = 'Descargar CV';
        }


        // Traducir el texto del botón "Scroll Down" al español
        const scrollDownButton = document.querySelector('.scroll-down-btn');
        if (scrollDownButton) {
        scrollDownButton.innerHTML = '<i class="fas fa-chevron-down"></i> Desplácese hacia abajo';
        scrollDownButton.setAttribute('title', 'Ir a Acerca De Mí'); // Cambia el atributo 'title' al español
        }


        document.querySelector('h1').innerText = 'Portafolio.👨‍💻';
    } else if (language === 'en') {
        // Cambiar a inglés (ejemplo)
        document.querySelectorAll('.nav-link').forEach(function(link) {
            const key = link.getAttribute('data-key');
            if (key === 'navInicio') link.innerText = '<Home/>';
            if (key === 'navAcerca') link.innerText = '<About Me/>';
            if (key === 'navHabilidades') link.innerText = '<Skills/>';
            if (key === 'navContacto') link.innerText = '<Contacts/>';
        });

        // Traducir el texto de la disponibilidad para trabajar
        const availableText = document.querySelector('[data-key="availableForWork"]');
        if (availableText) {
            availableText.innerText = 'Available for work';
        }

        // Traducir la sección de "inicio"
        const welcomeMessage = document.querySelector('[data-key="welcomeMessage"]');
        if (welcomeMessage) {
            welcomeMessage.innerText = 'Hello! I\'m Cayo Jean👋';
        }

        const developerDescription = document.querySelector('[data-key="developerDescription"]');
        if (developerDescription) {
            developerDescription.innerText = 'Passionate developer about technology, lover of creativity and innovation, always exploring new challenges.';
        }

        const navigationHint = document.querySelector('[data-key="navigationHint"]');
        if (navigationHint) {
            navigationHint.innerText = 'Use the buttons above 👆 to navigate the site or scroll down👇.';
        }

        const scrollDownHint = document.querySelector('[data-key="scrollDownHint"]');
        if (scrollDownHint) {
            scrollDownHint.innerText = 'Scroll down';
        }

        // Traducir "Acerca de mí"
        const aboutMeTitle = document.querySelector('[data-key="aboutMeTitle"]');
        if (aboutMeTitle) {
            aboutMeTitle.innerText = '< About Me />';
        }

        const aboutMeDescription = document.querySelector('[data-key="aboutMeDescription"]');
        if (aboutMeDescription) {
            aboutMeDescription.innerText =
            "I am a Junior Full Stack Developer with practical knowledge in Front-End (HTML, CSS, and JAVASCRIPT) " +
            "and Back-End (Java, Spring Boot, and Spring Security), with the ability to understand new technologies quickly " +
            "and the capacity to work in a team environment. My journey into the world of technology began with a fascination " +
            "for creating solutions that not only work efficiently but also provide a compelling user experience. As my journey " +
            "continues in Full Stack development, I am always looking for projects and collaborative opportunities where I can " +
            "contribute with my skills and grow both personally and professionally. Let's connect and explore how we can create " +
            "something amazing together!";
        }

        // Traducir "Habilidades"
        const technicalSkillsTitle = document.querySelector('[data-key="technicalSkillsTitle"]');
        if (technicalSkillsTitle) {
            technicalSkillsTitle.innerText = '< Technical Skills />';
        }



        // Traducir "Herramientas"
        const toolsTitle = document.querySelector('[data-key="toolsTitle"]');
        if (toolsTitle) {
        toolsTitle.innerText = 'Tools'; // En inglés
        }

        // Traducir "habilidades blandas" INGLES
        const softSkillsTitle = document.querySelector('[data-key="softSkillsTitle"]');
        if (softSkillsTitle) {
            softSkillsTitle.innerText = 'Soft Skills';
        }

        // Traducir "Adaptabilidad" INGLES
        const adaptabilityTitle = document.querySelector('[data-key="adaptabilityTitle"]');
        if (adaptabilityTitle) {
        adaptabilityTitle.innerText = 'Adaptability'; // En inglés
        }


        // Traducir "Dedicado" INGLES
        const dedicatedTitle = document.querySelector('[data-key="dedicatedTitle"]');
        if (dedicatedTitle) {
        dedicatedTitle.innerText = 'Dedicated'; // En inglés
        }



        // Traducir "Ética Profesional"
        const professionalEthicsTitle = document.querySelector('[data-key="professionalEthicsTitle"]');
        if (professionalEthicsTitle) {
        professionalEthicsTitle.innerText = 'Professional Ethics'; // En inglés
        }



        // Traducir "Trabajo en Equipo"
        const teamworkTitle = document.querySelector('[data-key="teamworkTitle"]');
        if (teamworkTitle) {
        teamworkTitle.innerText = 'Teamwork'; // En inglés
        }



        // Traducir "Contactos"
        const contactTitle = document.querySelector('[data-key="contactsTitle"]');
        if (contactTitle) {
            contactTitle.innerText = '< Contacts />';
        }

        // Traducir Footer
        const footerCopyright = document.querySelector('[data-key="footerCopyright"]');
        if (footerCopyright) {
            footerCopyright.innerHTML = '<b>&copy; Author: Cayo Jean &copy;</b>';
        }

        const footerRights = document.querySelector('[data-key="footerRights"]');
        if (footerRights) {
            footerRights.innerText = 'All Rights Reserved';
        }

        document.querySelector('h1').innerText = 'Portfolio.👨‍💻';


        // Traducir Descargar CV. a ingles
        const downloadCVButton = document.querySelector('[data-key="downloadCV"]');
        if (downloadCVButton) {
        downloadCVButton.innerText = 'Download CV';
        }


        // Traducir el texto del botón "Desplácese hacia abajo" al inglés
        const scrollDownButton = document.querySelector('.scroll-down-btn');
        if (scrollDownButton) {
        scrollDownButton.innerHTML = '<i class="fas fa-chevron-down"></i> Scroll Down';
        scrollDownButton.setAttribute('title', 'Go to About Me'); // Traduce el atributo 'title'
        }

    }


    // Reaplicar el efecto falling-text después de la traducción
    document.querySelectorAll('.falling-text').forEach(function(element) {
        element.classList.remove('falling-text');
        void element.offsetWidth; // Forzar el reflow
        element.classList.add('falling-text');
    });
}



// Traducciones
const translations = {
    en: {
        Inicio: '<Home/>',
        AcercaDeMi: '<About Me/>',
        Habilidades: '<Skills/>',
        Contactos: '<Contacts/>'
    },
    es: {
        Inicio: '<Inicio/>',
        AcercaDeMi: '<Acerca de Mí/>',
        Habilidades: '<Habilidades/>',
        Contactos: '<Contactos/>'
    }
};

// Función para traducir
function translateMenu(language) {
    document.querySelectorAll('.nav-link').forEach(function(link) {
        const key = link.getAttribute('data-key');
        const span = link.querySelector('span');
        if (key && span) {
            span.innerText = translations[language][key];
        }
    });
    // Guardar idioma en localStorage
    localStorage.setItem('language', language);
}

// Cargar idioma guardado al iniciar la página
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('language') || 'es'; // por defecto 'es'
    translateMenu(savedLanguage);
});

// Botones de idioma
document.getElementById('btn-es').addEventListener('click', function () {
    translateMenu('es');
});
document.getElementById('btn-en').addEventListener('click', function () {
    translateMenu('en');
});