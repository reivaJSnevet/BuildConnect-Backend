/**
 * @swagger
 * tags:
 *   - name: Owners
 *     description: Operations related to owners.
 */

/**
 * @swagger
 * /owners:
 *   post:
 *     summary: Create a new owner
 *     tags: [Owners]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserOwner'
 *     responses:
 *       '201':
 *         description: Owner created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Owner created successfully"
 *                 owner:
 *                   $ref: '#/components/schemas/User'
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
 * /owners:
 *   get:
 *     summary: Get all owners
 *     tags: [Owners]
 *     responses:
 *       '200':
 *         description: List of owners
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserOwner'
 */

/**
 * @swagger
 * /owners/{id}:
 *   get:
 *     summary: Get an owner by ID
 *     tags: [Owners]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the owner
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       '200':
 *         description: Owner found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserOwner'
 *       '404':
 *         description: Owner not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Owner not found"
 */

/**
 * @swagger
 * /owners/{id}:
 *   put:
 *     summary: Update an owner by ID
 *     tags: [Owners]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the owner
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserOwner'
 *     responses:
 *       '200':
 *         description: Owner updated successfully
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Owner not found
 */

/**
 * @swagger
 * /owners/{id}:
 *   delete:
 *     summary: Delete an owner by ID
 *     tags: [Owners]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the owner
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       '204':
 *         description: Owner deleted successfully
 *       '404':
 *         description: Owner not found
 */

/**
 * @swagger
 * /owners/{id}/Rating:
 *   post:
 *     summary: Add a rating to an owner
 *     tags: [Owners]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the owner
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               companyId:
 *                 type: string
 *                 description: ID of the company providing the rating.
 *                 example: "company-uuid-1234"
 *               score:
 *                 type: number
 *                 description: Rating score to add (e.g., 1 to 5).
 *                 example: 4
 *     responses:
 *       '200':
 *         description: Rating added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Rating added successfully"
 *       '404':
 *         description: Owner not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Owner not found"
 */

/**
 * @swagger
 * /owners/{id}/Rating:
 *   put:
 *     summary: Update an owner's rating
 *     tags: [Owners]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the owner
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               companyId:
 *                 type: string
 *                 description: ID of the company associated with the rating.
 *                 example: "company-uuid-1234"
 *               score:
 *                 type: number
 *                 description: New rating score to update (e.g., 1 to 5).
 *                 example: 5
 *     responses:
 *       '200':
 *         description: Rating updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Rating updated successfully"
 *       '404':
 *         description: Owner not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Owner not found"
 */
