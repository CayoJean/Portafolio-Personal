document.addEventListener("DOMContentLoaded", function () {
  const fallingTexts = document.querySelectorAll(".falling-text");

  // Añade un retraso basado en el índice del elemento
  fallingTexts.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.2}s`;
  });

  // Configura el Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.5, // Ajusta este valor para que se active cuando el elemento esté parcialmente visible
    }
  );

  // Observa cada elemento con la clase .falling-text
  fallingTexts.forEach((element) => {
    observer.observe(element);
  });
});






document.addEventListener("DOMContentLoaded", function () {
  const fallingTexts = document.querySelectorAll(".falling-text");

  // Añade un retraso basado en el índice del elemento
  fallingTexts.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.2}s`;
  });

  // Configura el Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target.classList.remove("fade-out"); // Elimina la clase de salida
        } else {
          entry.target.classList.remove("visible");
          entry.target.classList.add("fade-out"); // Añade la clase de salida
        }
      });
    },
    {
      threshold: 0.5, // Ajusta este valor para que se active cuando el elemento esté parcialmente visible
    }
  );

  // Observa cada elemento con la clase .falling-text
  fallingTexts.forEach((element) => {
    observer.observe(element);
  });
});









/**ES SOLO PARA QUE EL HEADER SE MUEVA O CARGUE INDEPENDIENEMENTE DE LA PAGINA */
document.addEventListener("DOMContentLoaded", () => {
  const headerElements = document.querySelectorAll("header .fade-in");

  headerElements.forEach((el) => {
      el.classList.add("visible");
  });
});
