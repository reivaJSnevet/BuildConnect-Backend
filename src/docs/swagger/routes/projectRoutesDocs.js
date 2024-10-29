/**
 * @swagger
 * tags:
 *   - name: Projects
 *     description: Endpoints for managing projects
 */

/**
 * @swagger
 * /projects:
 *   post:
 *     summary: Create a new project
 *     tags: [Projects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Project'
 *     responses:
 *       '201':
 *         description: Project created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       '400':
 *         description: Bad request
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
 * /projects:
 *   get:
 *     summary: Retrieve a list of all projects
 *     tags: [Projects]
 *     responses:
 *       '200':
 *         description: A list of projects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Project'
 */

/**
 * @swagger
 * /projects/{id}:
 *   get:
 *     summary: Retrieve a project by ID
 *     tags: [Projects]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Unique ID of the project
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       '200':
 *         description: Project retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       '404':
 *         description: Project not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Project not found"
 */

/**
 * @swagger
 * /projects/{id}:
 *   put:
 *     summary: Update a project by ID
 *     tags: [Projects]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Unique ID of the project
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Project'
 *     responses:
 *       '200':
 *         description: Project updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid input data"
 *       '404':
 *         description: Project not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Project not found"
 */

/**
 * @swagger
 * /projects/{id}:
 *   delete:
 *     summary: Delete a project by ID
 *     tags: [Projects]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Unique ID of the project
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       '204':
 *         description: Project deleted successfully
 *       '404':
 *         description: Project not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Project not found"
 */

/**
 * @swagger
 * /projects/{id}/categories/{categoryId}:
 *   post:
 *     summary: Add a category to a project
 *     tags: [Projects]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the project
 *         schema:
 *           type: string
 *           format: uuid
 *       - name: categoryId
 *         in: path
 *         required: true
 *         description: ID of the category to be added
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       '200':
 *         description: Category added to the project successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Category added successfully"
 *       '404':
 *         description: Project or category not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Project or category not found"
 */

/**
 * @swagger
 * /projects/{id}/categories/{categoryId}:
 *   delete:
 *     summary: Remove a category from a project
 *     tags: [Projects]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the project
 *         schema:
 *           type: string
 *           format: uuid
 *       - name: categoryId
 *         in: path
 *         required: true
 *         description: ID of the category to be removed
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       '200':
 *         description: Category removed from the project successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Category removed successfully"
 *       '404':
 *         description: Project or category not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Project or category not found"
 */

/**
 * @swagger
 * /projects/{id}/types/{typeId}:
 *   post:
 *     summary: Add a type to a project
 *     tags: [Projects]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the project
 *         schema:
 *           type: string
 *           format: uuid
 *       - name: typeId
 *         in: path
 *         required: true
 *         description: ID of the type to be added
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       '200':
 *         description: Type added to the project successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Type added successfully"
 *       '404':
 *         description: Project or type not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Project or type not found"
 */

/**
 * @swagger
 * /projects/{id}/types/{typeId}:
 *   delete:
 *     summary: Remove a type from a project
 *     tags: [Projects]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the project
 *         schema:
 *           type: string
 *           format: uuid
 *       - name: typeId
 *         in: path
 *         required: true
 *         description: ID of the type to be removed
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       '200':
 *         description: Type removed from the project successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Type removed successfully"
 *       '404':
 *         description: Project or type not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Project or type not found"
 */
