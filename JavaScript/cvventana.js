function openModal() {
    const modal = document.getElementById('modal-pdf');
    const cvFrame = document.getElementById('cv-frame');
    cvFrame.src = '/doc/CV.pdf'; // Ruta del archivo PDF
    modal.style.display = 'flex'; // Mostrar el modal
}

function closeModal() {
    const modal = document.getElementById('modal-pdf');
    const cvFrame = document.getElementById('cv-frame');
    cvFrame.src = ''; // Limpiar el iframe
    modal.style.display = 'none'; // Ocultar el modal
}