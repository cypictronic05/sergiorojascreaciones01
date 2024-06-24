require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para analizar los datos del formulario
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para manejar el envío del formulario
app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log(email);
    console.log(name);
    console.log(message);

    // Configurar el transporte de nodemailer
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL, // Tu correo
            pass: process.env.PASSWORD // Tu contraseña o contraseña de aplicación
        }
    });

    // Configurar el contenido del correo
    let mailOptions = {
        from: process.env.EMAIL,
        to: "sergiorojascreaciones@gmail.com", // Tu correo
        subject: `Nuevo mensaje de contacto: ${subject}`,
        text: `Nombre: ${name}\nCorreo electrónico: ${email}\nAsunto: ${subject}\n\nMensaje:\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Correo enviado con éxito.');
        console.log(process.env.EMAIL);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al enviar el correo.');
        console.log(process.env.EMAIL);
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
    console.log(process.env.EMAIL);
    console.log(process.env.PASSWORD);
});
