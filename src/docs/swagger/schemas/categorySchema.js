/**
 * @swagger
 * components:
 *  schemas:
 *    Category:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          format: uuid
 *          description: El ID auto-generado de la categoría
 *        name:
 *          type: string
 *          description: El nombre de la categoría
 *        description:
 *          type: string
 *          description: Una breve descripción de la categoría
 *      required:
 *        - name
 *        - description
 *      example:
 *        id: "abc123-def456-ghi789-jkl012"
 *        name: "Vidrios"
 *        description: "Categoría de productos de vidrio"
 */