// ============================================================
// CONTADOR GLOBAL — visitas de TODOS los dispositivos
// Usa counterapi.dev (reemplazo gratuito de countapi.xyz)
// ============================================================

const NAMESPACE = 'cayojean-portafolio';
const KEY       = 'visitas-totales';
const API_HIT   = `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`; // ← LÍNEA CAMBIADA
const numVisitas = document.getElementById('num-visitas');

// Mostrar caché local mientras carga
const cached = localStorage.getItem('visitas_global_cache');
numVisitas.textContent = cached || '...';

// Llamar a la API global
fetch(API_HIT)
  .then(res => res.json())
  .then(data => {
    const total = data.count ?? data.value ?? null; // ← LÍNEA CAMBIADA
    if (total !== null) {
      numVisitas.textContent = total;
      localStorage.setItem('visitas_global_cache', total);
    }
  })
  .catch(() => {
    // Fallback: si la API falla mostrar caché o guión
    numVisitas.textContent = cached || '-';
  });