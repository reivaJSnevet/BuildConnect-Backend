/**
 * @swagger
 * components:
 *   schemas:
 *     Company:
 *       type: object
 *       properties:
 *         companyId:
 *           type: string
 *           format: uuid
 *           description: ID autogenerado de la compañía
 *         legalId:
 *           type: string
 *           description: ID legal de la compañía
 *         name:
 *           type: string
 *           description: Nombre de la compañía
 *         email:
 *           type: string
 *           format: email
 *           description: Correo electrónico de la compañía
 *         password:
 *           type: string
 *           description: Contraseña de la compañía
 *         role:
 *           type: string
 *           enum: [company]
 *           description: Rol de la compañía
 *         phone:
 *           type: object
 *           description: Información de contacto telefónico
 *         address:
 *           type: string
 *           description: Dirección de la compañía
 *         pricing:
 *           type: object
 *           description: Información sobre precios
 *         isEmailVerified:
 *           type: boolean
 *           description: Estado de verificación del correo electrónico
 *         verificationToken:
 *           type: string
 *           description: Token de verificación de correo
 *         accessToken:
 *           type: string
 *           description: Token de acceso
 *         recoveryToken:
 *           type: string
 *           description: Token de recuperación
 *       required:
 *         - companyId
 *         - legalId
 *         - name
 *         - email
 *         - password
 *         - phone
 *         - address
 *         - pricing
 *       example:
 *         companyId: "1e4b2f3a-23f1-4f9b-bfae-123456789abc"
 *         legalId: "123456789"
 *         name: "Constructora XYZ"
 *         email: "contacto@constructora.xyz"
 *         password: "securePassword123"
 *         role: "company"
 *         phone: {"mobile": "1234567890", "office": "0987654321"}
 *         address: "Av. Central, San José, Costa Rica"
 *         pricing: {"project": 5000, "consultation": 200}
 *         isEmailVerified: false
 *         verificationToken: "verificationToken123"
 *         accessToken: "accessToken123"
 *         recoveryToken: "recoveryToken123"
 *
 */
