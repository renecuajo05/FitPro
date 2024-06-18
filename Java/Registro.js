// Mostrar el formulario de registro al hacer clic en el botón "Comencemos"
document.getElementById('comencemosBtn').addEventListener('click', function() {
    document.getElementById('registroModal').style.display = 'block';
});

// Mostrar el formulario al dar clic en el boton "Registro"
document.getElementById('registroLink').addEventListener('click', function() {
    document.getElementById('registroModal').style.display = 'block';
});

// Cerrar el formulario de registro al hacer clic en la 'X'
document.querySelector('.closeBtn').addEventListener('click', function() {
    document.getElementById('registroModal').style.display = 'none';
});

// Cerrar el formulario de registro al hacer clic fuera del modal
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('registroModal')) {
        document.getElementById('registroModal').style.display = 'none';
    }
});
