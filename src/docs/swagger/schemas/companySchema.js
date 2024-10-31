/**
 * @swagger
 * components:
 *   schemas:
 *     UserCompany:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: "456e4567-e89b-12d3-a456-426614174000"
 *         email:
 *           type: string
 *           format: email
 *           example: "example@company.com"
 *         password:
 *           type: string
 *           minLength: 8
 *           maxLength: 255
 *           example: "securePassword123"
 *         role:
 *           type: string
 *           enum: [owner, company, admin]
 *           example: "company"
 *         contacts:
 *           type: object
 *           properties:
 *             emails:
 *               type: array
 *               items:
 *                 type: string
 *                 format: email
 *                 example: "contact@example.com"
 *             numbers:
 *               type: array
 *               items:
 *                 type: string
 *                 example: "1234567890"
 *           required:
 *             - emails
 *             - numbers
 *           example:
 *             emails: ["contact@example.com"]
 *             numbers: ["1234567890"]
 *         Company:
 *           type: object
 *           properties:
 *             legalId:
 *               type: string
 *               example: "123-456-789"
 *             name:
 *               type: string
 *               minLength: 1
 *               maxLength: 255
 *               example: "Example Company"
 *             description:
 *               type: string
 *               example: "This is an example company description."
 *             mission:
 *               type: string
 *               example: "To provide exemplary services to our clients."
 *             vision:
 *               type: string
 *               example: "To be a leader in our industry."
 *             address:
 *               type: object
 *               properties:
 *                 province:
 *                   type: string
 *                   example: "San José"
 *                 canton:
 *                   type: string
 *                   example: "Escazú"
 *                 district:
 *                   type: string
 *                   example: "San Rafael"
 *                 streetDetails:
 *                   type: string
 *                   example: "123 Main St."
 *               required:
 *                 - province
 *                 - canton
 *                 - district
 *                 - streetDetails
 *             pricing:
 *               type: object
 *               properties:
 *                 plan:
 *                   type: string
 *                   example: "Premium"
 *                 billingCycle:
 *                   type: string
 *                   example: "Monthly"
 *                 billingDate:
 *                   type: string
 *                   format: date
 *                   example: "2024-10-01"
 *               required:
 *                 - plan
 *                 - billingCycle
 *                 - billingDate
 *       required:
 *         - id
 *         - email
 *         - password
 *         - role
 *         - contacts
 *         - Company
 */
