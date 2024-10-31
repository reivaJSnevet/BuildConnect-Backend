/**
 * @swagger
 * tags:
 *   - name: ProjectType
 *     description: Endpoints for managing project types
 */

/**
 * @swagger
 * /project-type:
 *   post:
 *     summary: Create a new project type
 *     tags: [ProjectType]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProjectType'
 *     responses:
 *       '201':
 *         description: Project type created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProjectType'
 *       '400':
 *         description: Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid input data"
 */

/**
 * @swagger
 * /project-type:
 *   get:
 *     summary: Retrieve a list of all project types
 *     tags: [ProjectType]
 *     responses:
 *       '200':
 *         description: A list of project types
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ProjectType'
 */

/**
 * @swagger
 * /project-type/{id}:
 *   get:
 *     summary: Retrieve a project type by ID
 *     tags: [ProjectType]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Unique identifier for the project type
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       '200':
 *         description: Project type retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProjectType'
 *       '404':
 *         description: Project type not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Project type not found"
 */

/**
 * @swagger
 * /project-type/{id}:
 *   put:
 *     summary: Update a project type by ID
 *     tags: [ProjectType]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Unique identifier for the project type
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProjectType'
 *     responses:
 *       '200':
 *         description: Project type updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProjectType'
 *       '400':
 *         description: Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid input data"
 *       '404':
 *         description: Project type not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Project type not found"
 */

/**
 * @swagger
 * /project-type/{id}:
 *   delete:
 *     summary: Delete a project type by ID
 *     tags: [ProjectType]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Unique identifier for the project type
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       '204':
 *         description: Project type deleted successfully
 *       '404':
 *         description: Project type not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Project type not found"
 */
