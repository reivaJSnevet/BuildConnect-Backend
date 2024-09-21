/**
 * @swagger
 * components:
 *  schemas:
 *    Comment:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          format: uuid
 *          description: El id autogenerado del comentario
 *        content:
 *          type: string
 *          description: El contenido del comentario
 *        createdAt:
 *          type: string
 *          format: date-time
 *          description: Fecha de creación del comentario
 *        updatedAt:
 *          type: string
 *          format: date-time
 *          description: Fecha de última actualización del comentario
 *      required:
 *        - id
 *        - content
 *        - createdAt
 *        - updatedAt
 *      example:
 *        id: "123e4567-e89b-12d3-a456-426614174000"
 *        content: "Este es un comentario de ejemplo"
 *        createdAt: "2024-09-20T15:20:30Z"
 *        updatedAt: "2024-09-20T15:20:30Z"
 */
