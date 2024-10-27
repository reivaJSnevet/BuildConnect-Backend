/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          format: uuid
 *          description: User ID generated automatically
 *        email:
 *          type: string
 *          format: email
 *          description: User email
 *        password:
 *          type: string
 *          description: User password, must be at least 8 characters
 *        role:
 *          type: string
 *          enum: [owner, company, admin]
 *          description: User role, one of "owner", "company", or "admin"
 *        contacts:
 *          type: object
 *          properties:
 *            emails:
 *              type: array
 *              items:
 *                type: string
 *                format: email
 *              description: List of user's email contacts
 *            numbers:
 *              type: array
 *              items:
 *                type: string
 *              description: List of user's phone contacts
 *          description: JSON object containing lists of user's email and phone contacts
 *        emailVerificationToken:
 *          type: string
 *          description: Token used for email verification, stored as JWT
 *        recoveryToken:
 *          type: string
 *          description: Token used for account recovery, stored as JWT
 *        refreshToken:
 *          type: string
 *          description: Token used for refreshing authentication sessions, stored as JWT
 *      required:
 *        - email
 *        - password
 *        - role
 *        - contacts
 *      example:
 *        email: example@example.com
 *        role: owner
 *        contacts: 
 *          emails: ["contact@example.com"]
 *          numbers: ["1234567890"]
 */
