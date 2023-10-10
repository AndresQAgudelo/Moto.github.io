// Inicializa Email.js con tus credenciales
emailjs.init("-FMtPJjLDEeBedbcc");

// Obtén el formulario y agrega un controlador de eventos para el envío
const contactForm = document.getElementById('contactFormFooter');
const submitButton = document.getElementById('submitButton'); // Agrega un ID al botón Enviar
const successMessage = document.getElementById('submitSuccessMessage');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Obtén los valores de los campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('emailAddressBelow').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    // Validación simple del nombre (debe contener al menos 2 caracteres)
    if (name.length < 2) {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Validación simple de correo electrónico
    if (!isValidEmail(email)) {
        alert("Por favor, ingrese una dirección de correo electrónico válida.");
        return;
    }


    // Desactiva el botón para evitar envíos múltiples
    submitButton.disabled = true;

    // Crea un objeto con los datos del formulario
    const formData = {
        name: name,
        email: email,
        phoneNumber: phoneNumber
    };

    // Configura los parámetros del correo
    const emailParams = {
        to_email: "revealmoto@gmail.com", // Dirección de correo destino
        from_name: name, // Nombre del remitente
        reply_to: email, // Dirección de respuesta
        message: `Nombre: ${name}\nCorreo: ${email}\nNúmero de teléfono: ${phoneNumber}` // Contenido del mensaje
    };

    // Envía el correo electrónico utilizando Email.js
    emailjs.send("service_ot0t93e", "template_c3sg2g7", emailParams)
        .then(function (response) {
            // Mostrar mensaje de éxito
            successMessage.classList.remove('d-none');
        }, function (error) {
            // Mostrar mensaje de error (opcional)
        });
});

// Función para validar el formato de correo electrónico
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
