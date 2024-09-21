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
 *        name:
 *          type: string
 *          description: User name
 *        lastName:
 *          type: string
 *          description: User last name
 *        lastName2:
 *          type: string
 *          description: User second last name
 *        phone:
 *          type: string
 *          description: User phone number
 *        email:
 *          type: string
 *          description: User email
 *        password:
 *          type: string
 *          description: User password
 *        role:
 *          type: string
 *          description: User role (admin, user) automatically set to user
 *        isEmailVerified:
 *          type: boolean
 *          description: User email verification status
 *        emailVerificationToken:
 *          type: string
 *          description: User email verification token
 *        recoveryToken:
 *          type: string
 *          description: User recovery token
 *        accessToken:
 *          type: string
 *          description: User access token 
 *      required:
 *        - name
 *        - lastName
 *        - lastName2
 *        - phone
 *        - email
 *        - password
 *      example:
 *        name: John
 *        lastName: Doe
 *        lastName2: Smith
 *        phone: 1234567890
 *        email: a@example.com
 *        password: password
 */
