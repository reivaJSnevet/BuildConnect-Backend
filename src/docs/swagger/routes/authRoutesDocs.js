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
 *         headers:
 *           Set-Cookie:
 *             description: Contains the refresh token for the user session.
 *             type: string
 *             example: "refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: uuid
 *                       description: Unique identifier for the user
 *                       example: "123e4567-e89b-12d3-a456-426614174000"
 *                     email:
 *                       type: string
 *                       description: User's email address
 *                       example: "example@example.com"
 *                     role:
 *                       type: string
 *                       description: Role of the user (e.g., owner, company)
 *                       example: "owner"
 *                     contacts:
 *                       type: object
 *                       properties:
 *                         emails:
 *                           type: array
 *                           items:
 *                             type: string
 *                             example: "contact@example.com"
 *                         numbers:
 *                           type: array
 *                           items:
 *                             type: string
 *                             example: "1234567890"
 *                 accessToken:
 *                   type: string
 *                   description: JWT access token for the user
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyM2U0NTY3LWU4OWItMTJkMy1hNDU2LTQyNjYxNDE3NDAwMCIsImVtYWlsIjoiZXhhbXBsZUBleGFtcGxlLmNvbSIsInJvbGUiOiJvd25lciIsImlhdCI6MTczMDMzNDg1MiwiZXhwIjoxNzMwMzM2NjUyfQ.OtZlgKRFCKXaJF38jcSzhw4t9AOmRCKFQY8p63ibsK8"
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