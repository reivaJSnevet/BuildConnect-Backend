/**
 * @swagger
 * /projects:
 *   get:
 *     summary: Obtiene todos los proyectos
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: Lista de proyectos obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Project'
 *       500:
 *         description: Error interno del servidor
 *   post:
 *     summary: Crea un nuevo proyecto
 *     tags: [Projects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Project'
 *     responses:
 *       201:
 *         description: Proyecto creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       400:
 *         description: Petición incorrecta, datos del proyecto incompletos
 *       500:
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /projects/{id}:
 *   get:
 *     summary: Obtiene un proyecto por su id
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El id del proyecto
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Proyecto obtenido correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       404:
 *         description: Proyecto no encontrado
 *       500:
 *         description: Error interno del servidor
 *   put:
 *     summary: Actualiza un proyecto por su id
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El id del proyecto
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
 *       200:
 *         description: Proyecto actualizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       400:
 *         description: Petición incorrecta, datos del proyecto incompletos
 *       500:
 *         description: Error interno del servidor
 *   delete:
 *     summary: Elimina un proyecto por su id
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El id del proyecto
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Proyecto eliminado correctamente
 *       404:
 *         description: Proyecto no encontrado
 *       500:
 *         description: Error interno del servidor
 */
