<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Configuración del correo
    $to = "sergiorojascreaciones@gmail.com"; // Cambia esto por tu correo
    $subject = "Nuevo mensaje de contacto: $subject";
    $body = "Nombre: $name\nCorreo electrónico: $email\nAsunto: $subject\n\nMensaje:\n$message";
    $headers = "From: $email";

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "Correo enviado con éxito.";
    } else {
        echo "Error al enviar el correo.";
    }
} else {
    echo "Método no permitido.";
}
?>
