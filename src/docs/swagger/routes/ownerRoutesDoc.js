/**
 * @swagger
 * /owners:
 *   get:
 *     summary: Get all owners
 *     tags: [Owners]
 *     responses:
 *       200:
 *         description: List of owners retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserResponse' # Cambiado a UserResponse
 *       500:
 *         description: Internal server error
 *   post:
 *     summary: Create a new owner
 *     tags: [Owners]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput' # Cambiado a UserInput
 *     responses:
 *       201:
 *         description: Owner created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponse' # Cambiado a UserResponse
 *       400:
 *         description: Bad request, incomplete owner data
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /owners/{id}:
 *   get:
 *     summary: Get an owner by their id
 *     tags: [Owners]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the owner
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Owner retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponse' # Cambiado a UserResponse
 *       404:
 *         description: Owner not found
 *       500:
 *         description: Internal server error
 *   put:
 *     summary: Update an owner by their id
 *     tags: [Owners]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the owner
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput' # Cambiado a UserInput
 *     responses:
 *       200:
 *         description: Owner updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponse' # Cambiado a UserResponse
 *       400:
 *         description: Bad request, incomplete owner data
 *       404:
 *         description: Owner not found
 *       500:
 *         description: Internal server error
 *   delete:
 *     summary: Delete an owner by their id
 *     tags: [Owners]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the owner
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Owner deleted successfully
 *       404:
 *         description: Owner not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /owners/{ownerId}/addRating:
 *   post:
 *     summary: Add a rating for an owner
 *     tags: [Owners]
 *     parameters:
 *       - in: path
 *         name: ownerId
 *         required: true
 *         description: The ID of the owner
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
 *                 format: uuid
 *                 description: The ID of the company giving the rating
 *               score:
 *                 type: number
 *                 description: The rating score given to the owner
 *                 example: 4.5
 *     responses:
 *       200:
 *         description: Rating added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponse' # Cambiado a UserResponse
 *       400:
 *         description: Bad request, invalid or missing data
 *       404:
 *         description: Owner or company not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /owners/{ownerId}/updateRating:
 *   put:
 *     summary: Update an existing rating for an owner
 *     tags: [Owners]
 *     parameters:
 *       - in: path
 *         name: ownerId
 *         required: true
 *         description: The ID of the owner
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
 *                 format: uuid
 *                 description: The ID of the company giving the rating
 *               score:
 *                 type: number
 *                 description: The new rating score to be updated
 *                 example: 3.8
 *     responses:
 *       200:
 *         description: Rating updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponse' # Cambiado a UserResponse
 *       400:
 *         description: Bad request, invalid or missing data
 *       404:
 *         description: Owner or company not found
 *       500:
 *         description: Internal server error
 */

