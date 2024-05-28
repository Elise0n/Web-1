// Función para validar el formulario
function validarFormulario(event) {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto

    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    // Validar que todos los campos estén completos
    if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
        mostrarError('Por favor, complete todos los campos.');
        return;
    }

    // Validar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mostrarError('Por favor, ingrese un correo electrónico válido.');
        return;
    }

    // El formulario es válido
    mostrarMensaje('¡Formulario enviado correctamente!');
    document.getElementById('contactForm').reset(); // Limpiar el formulario
}

// Función para mostrar un mensaje de error
function mostrarError(mensaje) {
    var mensajeError = document.createElement('div');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('error');
    document.getElementById('mensajeEnviado').innerHTML = '';
    document.getElementById('mensajeEnviado').appendChild(mensajeError);
}

// Función para mostrar un mensaje de confirmación
function mostrarMensaje(mensaje) {
    var mensajeExito = document.createElement('div');
    mensajeExito.textContent = mensaje;
    mensajeExito.classList.add('exito');
    document.getElementById('mensajeEnviado').innerHTML = '';
    document.getElementById('mensajeEnviado').appendChild(mensajeExito);
}

// Agregar el evento submit al formulario
document.getElementById('contactForm').addEventListener('submit', validarFormulario);

var angle = 0;
function galleryspin(sign) { 
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}