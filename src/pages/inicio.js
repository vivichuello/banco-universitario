// Vinculamos el formulario y escuchamos el evento 'submit'
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe si hay errores

    // Capturamos los inputs y mensajes de error
    const correo = document.getElementById('usuario');
    const password = document.getElementById('password');

    const errorCorreo = document.getElementById('error-correo');
    const errorPassword = document.getElementById('error-password');

    // Limpiar mensajes de error anteriores
    errorCorreo.textContent = '';
    errorPassword.textContent = '';

    let valido = true; // Para verificar si los datos son correctos

    // Validación de correo
    if (!correo.value) { // Campo vacío
        errorCorreo.textContent = 'El correo es obligatorio.';
        valido = false;
    } else if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(correo.value)) { // Formato incorrecto
        errorCorreo.textContent = 'El formato del correo no es válido.';
        valido = false;
    }

    // Validación de contraseña
    if (!password.value) { // Campo vacío
        errorPassword.textContent = 'La contraseña es obligatoria.';
        valido = false;
    } else if (password.value.length < 6) { // Contraseña muy corta
        errorPassword.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        valido = false;
    }

    // Si los datos son válidos, permite el envío
    if (valido) {
        alert('Formulario enviado correctamente.');
        this.submit(); // Envía el formulario
    }
});
