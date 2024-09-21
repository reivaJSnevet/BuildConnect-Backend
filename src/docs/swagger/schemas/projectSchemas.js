/**
 * @swagger
 * components:
 *  schemas:
 *    Project:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          format: uuid
 *          description: The auto-generated UUID of the project
 *        title:
 *          type: string
 *          description: The title of the project
 *        description:
 *          type: string
 *          description: A brief description of the project
 *        location:
 *          type: string
 *          description: The location where the project is being carried out
 *        projectType:
 *          type: string
 *          enum: ["Revisión y Manatenimiento", "Reparaciones", "Demolición", "Diseño"]
 *          description: The type of project
 *        starDate:
 *          type: string
 *          format: date
 *          description: The start date of the project
 *        endDate:
 *          type: string
 *          format: date
 *          description: The end date of the project
 *        budget:
 *          type: integer
 *          description: The budget assigned to the project
 *        isFeactured:
 *          type: boolean
 *          description: Indicates if the project is featured
 *      required:
 *        - title
 *        - description
 *        - location
 *        - projectType
 *        - starDate
 *        - endDate
 *        - budget
 *        - isFeactured
 *      example:
 *        id: "d290f1ee-6c54-4b01-90e6-d701748f0851"
 *        title: "Building Renovation"
 *        description: "A complete renovation of a commercial building"
 *        location: "1234 Main St, City, Country"
 *        projectType: "Reparaciones"
 *        starDate: "2024-01-01"
 *        endDate: "2024-06-30"
 *        budget: 50000
 *        isFeactured: true
 */
