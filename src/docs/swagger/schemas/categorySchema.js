/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the category
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         name:
 *           type: string
 *           description: Name of the category
 *           example: "Brick"
 *           minLength: 1
 *           maxLength: 255
 *       required:
 *         - id
 *         - name
 *       additionalProperties: false
 */
