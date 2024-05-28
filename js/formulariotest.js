let nombre = document.getElementById('nombre');
let email = document.getElementById('email');
let mensaje = document.getElementById('mensaje');

// Función para validar el formulario
function validarFormulario(event) {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto
    // Obtener los valores de los campos del formulario
    let nombreVal = nombre.value;
    let emailVal = email.value;
    let mensajeVal = mensaje.value;
    let check = true;
    nombre.className = '';
    email.className = '';
    mensaje.className = '';
    document.getElementById('mensajesError').innerHTML = "";

    
    // Validar que todos los campos estén completos
    if (nombreVal.trim() == '') {
        check = false;
        nombre.className = 'error';
        mostrarError('Debe introducir un nombre.');
    }
    
    // Validar el formato del correo electrónico
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
        check = false;
        email.className = 'error';
        mostrarError('Debe introducir un email válido.');
    }
    
    if (mensajeVal.trim() == '') {
        check = false;
        mensaje.className = 'error';
        mostrarError('Debe introducir un mensaje.');
    }


    // El formulario es válido
    if (check == true) {
        mensajeExito();
        document.getElementById('contactForm').reset(); // Limpiar el formulario
        agregarComentario(nombreVal, mensajeVal);
    }
}

// Función para mostrar un mensaje de error
function mostrarError(mensaje) {
    let mensajeError = document.createElement('li');
    mensajeError.innerHTML = mensaje;
    document.getElementById('mensajesError').appendChild(mensajeError);
}

// Función para mostrar un mensaje de confirmación
function mensajeExito() {
    document.getElementById('contactForm').style.display = 'none';
    let formExitoso = document.createElement('div');
    formExitoso.id="formExitoso";
    document.getElementById('containerr').appendChild(formExitoso);
    
    let mensajeE = document.createElement('p');
    mensajeE.innerHTML = 'Se agregó el comentario';
    //agrega mensaje de exito y un boton para volver a comentar
    formExitoso.appendChild(mensajeE);
    let botonComentar = document.createElement('button');
    botonComentar.type="button";
    botonComentar.innerHTML="Agregar otro comentario";
    botonComentar.onclick = function(){
        comentarDeNuevo()
    }
    formExitoso.appendChild(botonComentar);
}
let arrComent = [];
let seccionComentarios = document.getElementById('seccionComentarios');

function agregarComentario(nombre, mensaje) {
    let contenedor = document.createElement('div');
    let usuario = document.createElement('p');
    usuario.innerHTML = `<b>${nombre}</b> comentó:`;
    let comentario = document.createElement('p');
    comentario.id = "comentario";
    comentario.innerHTML = mensaje;
    document.getElementById('seccionComentarios').appendChild(contenedor);
    contenedor.appendChild(usuario);
    contenedor.appendChild(comentario);
  
}

function comentarDeNuevo() {
    document.getElementById('formExitoso').remove();
    document.getElementById('contactForm').style.display = 'flex';

}

// Agregar el evento submit al formulario
document.getElementById('contactForm').addEventListener('submit', validarFormulario);
