import transporter from "../../config/nodemailer.js";

/**
 * Sends an email to the user with the verification link.
 * @async
 * @param {string} email - The email of the user.
 * @param {string} token - The token to verify the user.
 * @returns {Promise<void>} - A promise that resolves when the email is sent.
 * @throws {Error} - An error if the email could not be sent.
 */
const sendVerificationEmail = async (email, token) => {
    try {
        await transporter.sendMail({
            from: `"BuildConnect" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Verifica tu cuenta",
            html: `<!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Correo de Bienvenida</title>
            </head>
            <body>
            <div class="header">
                <h2>Te damos la bienvenida a BuildConnect</h2>
            </div>
            <div class="container">
                <div class="card">
                    <p>¡Gracias por unirte a nuestra comunidad!</p>
                
                       <p>Por favor, haz clic en el botón de abajo para verificar tu cuenta y comenzar a explorar todas las oportunidades que tenemos para ti.</p> 
            
                     <a href="${process.env.CLIENT_URL}/api/auth/verify-email/${token}">Verificar cuenta</a>
                </div>
            </div>
            </body>
            </html>`,
        });
    } catch (error) {
        throw error;
    }
};

export default sendVerificationEmail;
