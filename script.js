// Escuchamos el evento 'submit' (cuando se hace clic en Registrar)
document.getElementById('registroForm').addEventListener('submit', function(event) {
    
    // Evitamos que el formulario refresque la página (comportamiento por defecto)
    event.preventDefault();

    // Obtenemos los valores escritos por el usuario usando sus IDs
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const curso = document.getElementById('curso').value;

    // Validación simple en consola para verificar que los datos llegan
    console.log("--- Nuevo Registro ---");
    console.log("Nombre: " + nombre);
    console.log("Email: " + correo);
    console.log("Teléfono: " + telefono);
    console.log("Curso: " + curso);

    // Mostramos un mensaje de confirmación al usuario
    alert(`¡Gracias ${nombre}! Te has registrado correctamente en el curso de ${curso}.`);

    // Opcional: Limpiar los campos después de registrar
    this.reset();
});