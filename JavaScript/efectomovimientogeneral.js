document.addEventListener("DOMContentLoaded", function () {
    const texts = document.querySelectorAll(".falling-text");
    texts.forEach((text, index) => {
    text.style.animationDelay = `${0.2 + index * 0.2}s`; // Aplica retrasos dinámicos
    });
});
