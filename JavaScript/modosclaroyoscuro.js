
    document.addEventListener("DOMContentLoaded", () => {
        const themeToggle = document.getElementById("theme-toggle");
        const body = document.body;

        // Cargar el tema desde localStorage o usar el predeterminado
        const currentTheme = localStorage.getItem("theme") || "light-mode";
        body.classList.add(currentTheme);

        // Alternar temas
        themeToggle.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            body.classList.toggle("light-mode");

            // Guardar el tema en localStorage
            const newTheme = body.classList.contains("dark-mode")
                ? "dark-mode"
                : "light-mode";
            localStorage.setItem("theme", newTheme);
        });
    });

