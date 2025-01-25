document.addEventListener("DOMContentLoaded", function () {
  const fallingTexts = document.querySelectorAll(".falling-text");

  fallingTexts.forEach((element, index) => {
    // Añade un retraso basado en el índice del elemento
    element.style.animationDelay = `${index * 0.2}s`;
  });
});