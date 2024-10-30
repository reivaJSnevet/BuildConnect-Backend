/**
 * @swagger
 * tags:
 *   - name: Authentication
 *     description: User authentication operations
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: User login
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       '200':
 *         description: Successful login
 *       '401':
 *         description: Unauthorized
 */

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: User logout
 *     tags: [Authentication]
 *     responses:
 *       '200':
 *         description: Successfully logged out
 */

/**
 * @swagger
 * /auth/refreshToken:
 *   post:
 *     summary: Refresh access token
 *     tags: [Authentication]
 *     responses:
 *       '200':
 *         description: Token refreshed successfully
 *       '403':
 *         description: Forbidden
 */

/**
 * @swagger
 * /auth/verify-email/{token}:
 *   get:
 *     summary: Verify user's email
 *     tags: [Authentication]
 *     parameters:
 *       - name: token
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           description: Email verification token
 *     responses:
 *       '200':
 *         description: Email verified successfully
 *       '400':
 *         description: Invalid or expired token
 */


/**
 * @swagger
 * /auth/forgot-password:
 *   post:
 *     summary: Request password reset
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ForgotPassword'
 *     responses:
 *       '200':
 *         description: Password reset link sent
 */

/**
 * @swagger
 * /auth/reset-password/{token}:
 *   post:
 *     summary: Reset password
 *     tags: [Authentication]
 *     parameters:
 *       - name: token
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           description: Password reset token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ResetPassword'
 *     responses:
 *       '200':
 *         description: Password reset successfully
 *       '400':
 *         description: Invalid or expired token
 */

/**
 * @swagger
 * /auth/register/owners:
 *   post:
 *     summary: Register a new owner
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserOwner'
 *     responses:
 *       '201':
 *         description: Owner registered successfully
 *       '400':
 *         description: Bad request
 */

/**
 * @swagger
 * /auth/register/companies:
 *   post:
 *     summary: Register a new company
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserCompany'
 *     responses:
 *       '201':
 *         description: Company registered successfully
 *       '400':
 *         description: Bad request
 */