document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Capturar los valores
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const curso = document.getElementById('curso').value;

    // Aquí puedes hacer lo que necesites con los datos
    console.log("Datos capturados:", {
        nombre,
        correo,
        telefono,
        curso
    });

    alert('¡Registro exitoso para ' + nombre + '!');
    
    // Opcional: Limpiar el formulario
    // this.reset();
});