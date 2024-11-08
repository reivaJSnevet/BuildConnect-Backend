import { sendEmail } from "../../services/contactService.js";

/**
 * Handles the contact form submission.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const handleContactForm = async (req, res) => {
    const { email, name, message } = req.body;

    try {
        await sendEmail({
            from: `"Build Connect" <${process.env.EMAIL_USER}>`,
            to: `"Build Connect" <${process.env.EMAIL_USER}>`,
            subject: `Nueva pregunta`,
            html: `<!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Nueva Pregunta</title>
                <style>
                    body {
                        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                        background-color: white;
                    }
            .header {
                background-color: #00455E;
                padding: 20px;
                text-align: center;
                color: #ffffff;
            }
            .container {
                margin: 50px auto;
                text-align: center;
                background-color: #ffffff;
            }
            .card {
                background-color: #ffffff;
                padding: 40px;
                border-radius: 20px;
                box-shadow: 0 0 20px #00455e5b;
                max-width: 400px;
                margin: 10px auto;
                position: relative;
            }
            .card img {
                max-width: 300px;
                margin-bottom: 20px;
            }
            .content {
                position: relative;
                z-index: 1;
                text-align: center;
            }
            .footer {
                background-color: #dcdcdc;
                padding: 10px;
                text-align: center;
                color: #333;
                border-radius: 0 0 10px 10px;
                margin-top: 20px;
            }
            .footer a {
                color: gray;
                text-decoration: none;
            }
                </style>
            </head>
            <body>
                <div class="header">
                    <h2>Nueva pregunta</h2>
                </div>
                <div class="container">
                    <div class="card">
                        <img src="https://img.freepik.com/vector-premium/diseno-ilustracion-vectorial-correo-electronico-fondo-blanco_917213-250905.jpg?semt=ais_hybrid" alt="Build Connect">
                        <div class="content">
                            <p>Hola, soy <strong>${name}</strong>.</p>
                            <br>${message}</br>
                            <p>Quedo atento(a) a su respuesta. Este es mi correo de contacto: <strong>${email}</strong>.</p>
                            <br>¡Gracias!</br>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <p>&copy; 2024 Build Connect. Todos los derechos reservados.</p>
                    <p>Nicoya, Guanacaste, Costa Rica</p>
                    <p><a href="#">Política de Privacidad</a> | <a href="#">Términos de Servicio</a></p>
                </div>
            </body>
            </html>`,
        });

        res.status(200).json({ message: "Correo enviado correctamente" });
    } catch (error) {
        console.error("Error al enviar el correo:", error);
        res.status(500).json({ error: "Error al enviar el correo" });
    }
};