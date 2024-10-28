/**
 * @swagger
 * components:
 *   schemas:
 *     UserOwner:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the user.
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         email:
 *           type: string
 *           format: email
 *           description: User's email address. Must be unique.
 *           example: "example@example.com"
 *         password:
 *           type: string
 *           minLength: 8
 *           maxLength: 255
 *           description: User's password, must be at least 8 characters long.
 *           example: "securePassword123"
 *         role:
 *           type: string
 *           enum:
 *             - owner
 *             - company
 *             - admin
 *           description: Role of the user in the system.
 *           example: owner
 *         contacts:
 *           type: object
 *           properties:
 *             emails:
 *               type: array
 *               items:
 *                 type: string
 *                 format: email
 *               description: List of contact email addresses.
 *               example: ["contact@example.com"]
 *             numbers:
 *               type: array
 *               items:
 *                 type: string
 *               description: List of contact phone numbers.
 *               example: ["1234567890"]
 *         Owner:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               description: First name of the owner.
 *               example: "John"
 *             lastname:
 *               type: string
 *               description: Owner's first surname.
 *               example: "Doe"
 *             lastname2:
 *               type: string
 *               description: Owner's second surname.
 *               example: "Smith"
 *       required:
 *         - id
 *         - email
 *         - password
 *         - role
 *         - contacts
 *         - Owner
 */
