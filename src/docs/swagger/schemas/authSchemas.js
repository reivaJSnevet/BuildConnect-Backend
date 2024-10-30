/**
 * @swagger
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: User's email address
 *           example: "user@example.com"
 *         password:
 *           type: string
 *           description: User's password
 *           example: "userPassword123"
 *       required:
 *         - email
 *         - password
 *
 *     ForgotPassword:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: User's email to reset the password
 *           example: "user@example.com"
 *       required:
 *         - email
 *
 *     ResetPassword:
 *       type: object
 *       properties:
 *         newPassword:
 *           type: string
 *           description: New password for the user
 *           example: "newSecurePassword123"
 *       required:
 *         - newPassword
 *
 *     RegisterOwner:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: Owner's email address
 *           example: "owner@example.com"
 *         password:
 *           type: string
 *           description: Owner's password
 *           example: "ownerPassword123"
 *         name:
 *           type: string
 *           description: Owner's first name
 *           example: "John"
 *         lastname:
 *           type: string
 *           description: Owner's surname
 *           example: "Doe"
 *         lastname2:
 *           type: string
 *           description: Owner's second surname
 *           example: "Smith"
 *       required:
 *         - email
 *         - password
 *         - name
 *         - lastname
 *         - lastname2
 *
 *     RegisterCompany:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: Company's email address
 *           example: "company@example.com"
 *         password:
 *           type: string
 *           description: Company's password
 *           example: "companyPassword123"
 *         companyName:
 *           type: string
 *           description: Name of the company
 *           example: "Tech Solutions Ltd."
 *       required:
 *         - email
 *         - password
 *         - companyName
 */
