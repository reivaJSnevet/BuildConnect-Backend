/**
 * @swagger
 * components:
 *   schemas:
 *     OwnerAttributes:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: First name of the owner
 *         lastname:
 *           type: string
 *           description: Last name of the owner
 *         lastname2:
 *           type: string
 *           description: Second last name of the owner
 *       required:
 *         - name
 *         - lastname
 *         - lastname2
 *       example:
 *         name: John
 *         lastname: Doe
 *         lastname2: Smith
 *
 *     UserInput:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: User email
 *         password:
 *           type: string
 *           description: User password, must be at least 8 characters
 *         role:
 *           type: string
 *           enum: [owner, company, admin]
 *           description: User role, one of "owner", "company", or "admin"
 *         contacts:
 *           type: object
 *           properties:
 *             emails:
 *               type: array
 *               items:
 *                 type: string
 *                 format: email
 *               description: List of user's email contacts
 *             numbers:
 *               type: array
 *               items:
 *                 type: string
 *               description: List of user's phone contacts
 *           description: JSON object containing lists of user's email and phone contacts
 *         Owner:
 *           $ref: '#/components/schemas/OwnerAttributes'
 *           description: Additional details if user is an owner
 *       required:
 *         - email
 *         - password
 *         - role
 *         - contacts
 *       example:
 *         email: example@example.com
 *         password: examplePassword
 *         role: owner
 *         contacts:
 *           emails: ["contact@example.com"]
 *           numbers: ["1234567890"]
 *         Owner:
 *           name: John
 *           lastname: Doe
 *           lastname2: Smith
 *
 *     UserResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: User ID generated automatically
 *         email:
 *           type: string
 *           format: email
 *           description: User email
 *         role:
 *           type: string
 *           enum: [owner, company, admin]
 *           description: User role
 *         contacts:
 *           type: object
 *           properties:
 *             emails:
 *               type: array
 *               items:
 *                 type: string
 *                 format: email
 *               description: List of user's email contacts
 *             numbers:
 *               type: array
 *               items:
 *                 type: string
 *               description: List of user's phone contacts
 *           description: JSON object containing lists of user's email and phone contacts
 *         Owner:
 *           $ref: '#/components/schemas/OwnerAttributes'
 *           description: Additional details if user is an owner
 *       required:
 *         - id
 *         - email
 *         - role
 *         - contacts
 *       example:
 *         id: 123e4567-e89b-12d3-a456-426614174000
 *         email: example@example.com
 *         role: owner
 *         contacts:
 *           emails: ["contact@example.com"]
 *           numbers: ["1234567890"]
 *         Owner:
 *           name: John
 *           lastname: Doe
 *           lastname2: Smith
 */
