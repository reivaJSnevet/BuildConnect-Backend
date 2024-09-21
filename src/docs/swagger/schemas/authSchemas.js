/**
 * @swagger
 * components:
 *  schemas:
 *    AuthLogin:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          description: User's email for login
 *        password:
 *          type: string
 *          description: User's password for login
 *      required:
 *        - email
 *        - password
 *      example:
 *        email: "user@example.com"
 *        password: "password"

 *    RegisterCompany:
 *      type: object
 *      properties:
 *        legalId:
 *          type: string
 *          description: Legal identification of the company
 *        name:
 *          type: string
 *          description: Company name
 *        email:
 *          type: string
 *          description: Company email for registration
 *        password:
 *          type: string
 *          description: Company password for registration
 *        phone:
 *          type: object
 *          properties:
 *            office:
 *              type: string
 *              description: Company office phone number
 *        address:
 *          type: string
 *          description: Company address
 *        pricing:
 *          type: object
 *          properties:
 *            plan:
 *              type: string
 *              description: Company's subscription plan (free, premium, etc.)
 *            payDay:
 *              type: string
 *              format: date-time
 *              description: The next payment date for the plan
 *      required:
 *        - legalId
 *        - name
 *        - email
 *        - password
 *      example:
 *        legalId: "118050543"
 *        name: "Company.inc"
 *        email: "a@gmail.com"
 *        password: "password"
 *        phone:
 *          office: "89546734"
 *        address: "local 12 en la pangea de rosas"
 *        pricing:
 *          plan: "free"
 *          payDay: "2024-09-06 09:43:00"

 *    RegisterUser:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: User's first name
 *        lastName:
 *          type: string
 *          description: User's last name
 *        lastName2:
 *          type: string
 *          description: User's second last name
 *        phone:
 *          type: object
 *          properties:
 *            mobile:
 *              type: string
 *              description: User's mobile phone number
 *        email:
 *          type: string
 *          description: User's email for registration
 *        password:
 *          type: string
 *          description: User's password for registration
 *      required:
 *        - name
 *        - lastName
 *        - lastName2
 *        - email
 *        - password
 *      example:
 *        name: "Javier"
 *        lastName: "Diaz"
 *        lastName2: "Marin"
 *        phone:
 *          mobile: "89234567"
 *        email: "javier.diaz.marin@est.una.ac.cr"
 *        password: "password"
 */
