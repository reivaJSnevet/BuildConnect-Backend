import jwt from "jsonwebtoken";
import { UnauthorizedError } from '../../errors/index.js';

/**
 * Generates an access token for the given user.
 * @param {object} user - The user object.
 * @param {object} company - The company object.
 * @returns {string} - The generated access token.
 * @throws {Error} - If an error occurs during token generation.
 */
const generateAccessToken = (user) => {
	try {
		const accessToken = jwt.sign(
			{
        sub: user.id,
				email: user.email,
				role: user.role,
			},
			process.env.JWT_SECRET,
			{
				expiresIn: "1d",
			},
		);
		return accessToken;
	} catch (error) {
		throw error;
	}
};

/**
 * Verifies the signature of a JSON Web Token (JWT) using the provided secret.
 * @param {string} token - The JWT to verify.
 * @param {string} secret - The secret used to sign the JWT.
 * @returns {Promise<object>} - A promise that resolves with the decoded payload of the JWT if the signature is valid, or rejects with an error if the signature is invalid.
 */
const verifySignature = (token) => {
	try {
		return new Promise((resolve, reject) => {
			jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
				if (err) {
					reject(new UnauthorizedError("jwt verifySignature", token));
				} else {
					resolve(decoded);
				}
			});
		});
	} catch (error) {
		throw error;
	}
};

export { generateAccessToken, verifySignature };