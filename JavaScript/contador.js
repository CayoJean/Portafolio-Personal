let contador = localStorage.getItem('contador') || 0;
document.getElementById('num-visitas').textContent = contador;

contador++;
localStorage.setItem('contador', contador);