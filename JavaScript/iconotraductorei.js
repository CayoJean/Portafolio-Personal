document.getElementById('btn-es').addEventListener('click', function() {
    changeLanguage('es');
});

document.getElementById('btn-en').addEventListener('click', function() {
    changeLanguage('en');
});

function changeLanguage(language) {
    if (language === 'es') {
        // Cambiar a español (ejemplo)
        document.querySelectorAll('.nav-link').forEach(function(link) {
            const key = link.getAttribute('data-key');
            if (key === 'navInicio') link.innerText = 'Inicio';
            if (key === 'navAcerca') link.innerText = 'Acerca de mí';
            if (key === 'navHabilidades') link.innerText = 'Habilidades';
            if (key === 'navContacto') link.innerText = 'Contacto';
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
            developerDescription.innerText = 'Desarrollador apasionado por la tecnología, Amante de la creatividad y la innovación, Explorando siempre nuevos desafíos.';
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
            aboutMeTitle.innerText = 'Acerca De Mí';
        }

        const aboutMeDescription = document.querySelector('[data-key="aboutMeDescription"]');
        if (aboutMeDescription) {
            aboutMeDescription.innerText = 
                'Programación Full Stack, con conocimiento práctico en lenguajes de programación y capacidad de ' +
                'entender nuevas tecnologías rápidamente y la facultad de trabajar en un entorno de equipo. ' +
                'Mi viaje en el mundo de la tecnología comenzó con una fascinación por crear soluciones que no solo ' +
                'funcionan de manera eficiente, sino que también brindan una experiencia de usuario convincente. ' +
                'A medida que continúa mi viaje en el desarrollo Full Stack, siempre estoy buscando proyectos y ' +
                'oportunidades colaborativas en los que pueda contribuir con mis habilidades y crecer tanto personal ' +
                'como profesionalmente. ¡Conectémonos y exploremos cómo podemos crear algo increíble juntos!';
        }

        // Traducir "Habilidades"
        const technicalSkillsTitle = document.querySelector('[data-key="technicalSkillsTitle"]');
        if (technicalSkillsTitle) {
            technicalSkillsTitle.innerText = 'Habilidades Técnicas';
        }

        const softSkillsTitle = document.querySelector('[data-key="softSkillsTitle"]');
        if (softSkillsTitle) {
            softSkillsTitle.innerText = 'Habilidades Blandas';
        }

        // Traducir "Contacto"
        const contactTitle = document.querySelector('[data-key="contactTitle"]');
        if (contactTitle) {
            contactTitle.innerText = 'Contacto';
        }

        // Traducir Footer
        const footerCopyright = document.querySelector('[data-key="footerCopyright"]');
        if (footerCopyright) {
            footerCopyright.innerHTML = '<b>&copy; Autor: Cayo Jean &copy;</b>';
        }

        const footerRights = document.querySelector('[data-key="footerRights"]');
        if (footerRights) {
            footerRights.innerText = 'Todos los Derechos Reservados';
        }

        // Traducir Descargar CV. a español
        const downloadCVButton = document.querySelector('[data-key="downloadCV"]');
        if (downloadCVButton) {
            downloadCVButton.innerText = 'Descargar CV';
        }

        document.querySelector('h1').innerText = 'Portafolio.👨‍💻';
    } else if (language === 'en') {
        // Cambiar a inglés (ejemplo)
        document.querySelectorAll('.nav-link').forEach(function(link) {
            const key = link.getAttribute('data-key');
            if (key === 'navInicio') link.innerText = 'Home';
            if (key === 'navAcerca') link.innerText = 'About Me';
            if (key === 'navHabilidades') link.innerText = 'Skills';
            if (key === 'navContacto') link.innerText = 'Contact';
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
            developerDescription.innerText = 'Passionate developer about technology, Lover of creativity and innovation, Always exploring new challenges.';
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
            aboutMeTitle.innerText = 'About Me';
        }

        const aboutMeDescription = document.querySelector('[data-key="aboutMeDescription"]');
        if (aboutMeDescription) {
            aboutMeDescription.innerText = 
                'Full Stack programming, with practical knowledge in programming languages and the ability to ' +
                'understand new technologies quickly and work in a team environment. My journey into the world of ' +
                'technology began with a fascination for creating solutions that not only work efficiently but also ' +
                'provide a compelling user experience. As my journey continues in Full Stack development, I am always ' +
                'looking for projects and collaborative opportunities where I can contribute with my skills and grow ' +
                'both personally and professionally. Let\'s connect and explore how we can create something amazing together!';
        }

        // Traducir "Habilidades"
        const technicalSkillsTitle = document.querySelector('[data-key="technicalSkillsTitle"]');
        if (technicalSkillsTitle) {
            technicalSkillsTitle.innerText = 'Technical Skills';
        }

        const softSkillsTitle = document.querySelector('[data-key="softSkillsTitle"]');
        if (softSkillsTitle) {
            softSkillsTitle.innerText = 'Soft Skills';
        }

        // Traducir "Contacto"
        const contactTitle = document.querySelector('[data-key="contactTitle"]');
        if (contactTitle) {
            contactTitle.innerText = 'Contact';
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
    }


        // Traducir Descargar CV. a ingles
        const downloadCVButton = document.querySelector('[data-key="downloadCV"]');
        if (downloadCVButton) {
            downloadCVButton.innerText = 'Download CV';
        }

    // Reaplicar el efecto falling-text después de la traducción
    document.querySelectorAll('.falling-text').forEach(function(element) {
        element.classList.remove('falling-text');
        void element.offsetWidth; // Forzar el reflow
        element.classList.add('falling-text');
    });
    
}