/**
 * @swagger
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the project
 *           example: "550e8400-e29b-41d4-a716-446655440000"
 *         title:
 *           type: string
 *           description: The title of the project
 *           example: "Community Housing Development"
 *         description:
 *           type: string
 *           description: Detailed description of the project
 *           example: "A project aimed at developing affordable housing in the community."
 *         location:
 *           type: object
 *           description: JSON object representing the location of the project
 *           properties:
 *             province:
 *               type: string
 *               description: Province where the project is located
 *               example: "San José"
 *             canton:
 *               type: string
 *               description: Canton within the province
 *               example: "Central"
 *           required:
 *             - province
 *             - canton
 *         startDate:
 *           type: string
 *           format: date
 *           description: Start date of the project, must be after the current date
 *           example: "2025-11-15"
 *         endDate:
 *           type: string
 *           format: date
 *           description: End date of the project, must be after the start date
 *           example: "2025-12-30"
 *         budget:
 *           type: integer
 *           description: Budget allocated to the project in currency units
 *           example: 500000
 *         pricing:
 *           type: object
 *           description: JSON object containing pricing information for the project
 *           properties:
 *             plan:
 *               type: string
 *               description: Pricing plan for the project
 *               example: "Standard"
 *             billingCycle:
 *               type: string
 *               description: Billing cycle for the project payments (e.g., monthly, annually)
 *               example: "monthly"
 *             billingDate:
 *               type: string
 *               format: date
 *               description: Billing start date for the project
 *               example: "2025-12-15"
 *           required:
 *             - plan
 *             - billingCycle
 *             - billingDate
 *         UserId:
 *           type: string
 *           format: uuid 
 *           description: Unique identifier for the project owner
 *           example: 123e4567-e89b-12d3-a456-426614174000
 *       required:
 *         - title
 *         - description
 *         - location
 *         - startDate
 *         - endDate
 *         - budget
 *         - pricing
 *         - UserId
 */
