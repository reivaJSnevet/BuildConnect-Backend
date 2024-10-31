/**
 * @swagger
 * tags:
 *   - name: Companies
 *     description: Operations related to companies.
 */

/**
 * @swagger
 * /companies:
 *   post:
 *     summary: Create a new company
 *     tags: [Companies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserCompany'  # Adjust if the schema is different
 *     responses:
 *       '201':
 *         description: Company created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Company created successfully"
 *                 company:
 *                   $ref: '#/components/schemas/UserCompany'  # Adjust if the schema is different
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "The provided data is invalid"
 */

/**
 * @swagger
 * /companies:
 *   get:
 *     summary: Get all companies
 *     tags: [Companies]
 *     responses:
 *       '200':
 *         description: List of companies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserCompany'  # Adjust if the schema is different
 */

/**
 * @swagger
 * /companies/{id}:
 *   get:
 *     summary: Get a company by ID
 *     tags: [Companies]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the company
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       '200':
 *         description: Company found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserCompany'  # Adjust if the schema is different
 *       '404':
 *         description: Company not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Company not found"
 */

/**
 * @swagger
 * /companies/{id}:
 *   put:
 *     summary: Update a company by ID
 *     tags: [Companies]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the company
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserCompany'  # Adjust if the schema is different
 *     responses:
 *       '200':
 *         description: Company updated successfully
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Company not found
 */

/**
 * @swagger
 * /companies/{id}:
 *   delete:
 *     summary: Delete a company by ID
 *     tags: [Companies]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the company
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       '204':
 *         description: Company deleted successfully
 *       '404':
 *         description: Company not found
 */

/**
 * @swagger
 * /companies/{id}/projects/{projectId}:
 *   post:
 *     summary: Add a bookmark to the company
 *     tags: [Companies]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the company
 *         schema:
 *           type: string
 *           format: uuid
 *       - name: projectId
 *         in: path
 *         required: true
 *         description: ID of the project to bookmark
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Bookmark added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Bookmark added successfully"
 *       '404':
 *         description: Company or project not found
 */

/**
 * @swagger
 * /companies/{id}/projects/{projectId}:
 *   delete:
 *     summary: Remove a bookmark from the company
 *     tags: [Companies]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the company
 *         schema:
 *           type: string
 *           format: uuid
 *       - name: projectId
 *         in: path
 *         required: true
 *         description: ID of the project to unbookmark
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Bookmark removed successfully
 *       '404':
 *         description: Company or project not found
 */
