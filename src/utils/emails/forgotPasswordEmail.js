import transporter from "../../config/nodemailer.js";

/**
 * Sends an email to the user with the verification link.
 * @param {string} email - The email of the user.
 * @param {string} token - The token to verify the user.
 * @returns {Promise<void>} - A promise that resolves when the email is sent.
 * @throws {Error} - An error if the email could not be sent.
 * @async
 */
const sendForgotPasswordEmail = async (email, token) => {
    try {
        await transporter.sendMail({
            from: `"BuildConnect" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Recuperación de contraseña",
            html: `
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Restaurar Contraseña</title>
            </head>
            <body>
                <div>
                    <h2>Restaurar Contraseña</h2>
                    <p>Recibiste este correo porque solicitaste restablecer tu contraseña. Haz clic en el botón de abajo para continuar con el proceso.</p>
                    <a href="${process.env.CLIENT_URL}/reset-password/${token}">Restablecer Contraseña</a>

            </body>
            </html>
        `,
            
        });
    } catch (error) {
        throw error;
    }
};

export default sendForgotPasswordEmail;
