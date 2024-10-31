import { User, Company, Owner } from '../models/index.js';
import sendForgotPasswordEmail from "../utils/emails/forgotPasswordEmail.js";
import { generateEmailToken } from '../utils/tokens/emailVerifyToken.js';
import { generateAccessToken, generateRefreshToken, verifySignature } from '../utils/tokens/jwt.js';
import { UnauthorizedError } from '../errors/index.js';
import ownerService from './ownerService.js';
import companyService from './companyService.js';

const authService = {
  login: async (email, password) => {
        try {
            const user = await User.scope("withSensitiveData").findOne({
                where: { email },
                include: [
                  Company,
                  Owner
                ],
            });

            if (!user) {
                throw new UnauthorizedError("user not registered", null);
            }
            console.log(user);
            console.log(email, " <===> ", password);
            console.log("\x1b[32m%s\x1b[0m", await user.validatePassword(password));


            const valid = await user.validatePassword(password);
            if (!valid) {
                throw new UnauthorizedError("invalid password", null);
            }

            if (user.emailVerificationToken) {
                throw new UnauthorizedError("email not verified", null);  
            }

            const accessToken = generateAccessToken(user);
            const refreshToken = generateRefreshToken(user);

            user.refreshToken = refreshToken;
            await user.save();

            delete user.dataValues.password;
            delete user.dataValues.refreshToken;
            delete user.dataValues.emailVerificationToken;
            delete user.dataValues.recoveryToken;

            if (!user.Owner) {
                delete user.dataValues.Owner;
            }else{
                delete user.dataValues.Company;
            }

            return {
                user,
                accessToken,
                refreshToken,
            };
        } catch (error) {
            throw error;
        }
    },
    logout: async (refreshToken) => {
        try {
            const decoded = await verifySignature(
                refreshToken,
                process.env.JWT_REFRESH_SECRET
            );

            if (!decoded) {
                throw new UnauthorizedError("invalid token", refreshToken);
            }

            const user = await User.findOne({
                where: { id: decoded.id },
            });

            if (!user) {
                throw new UnauthorizedError("user not registered", refreshToken);
            }

            user.refreshToken = null;
            await user.save();
        } catch (error) {
            throw error;
        }
    },
    handleRefreshToken: async (refreshToken) => {
        try {
            const decoded = await verifySignature(
                refreshToken,
                process.env.JWT_REFRESH_SECRET
            );

            if (!decoded) {
                throw new UnauthorizedError("Invalid token", refreshToken);
            }

            const user = await User.findOne({
                where: { id: decoded.id },
            });
            if (!user) {
                throw new UnauthorizedError("User not registered", refreshToken);
            }

            delete user.dataValues.password;
            delete user.dataValues.refreshToken;
            delete user.dataValues.emailVerificationToken;
            delete user.dataValues.recoveryToken;

            const accessToken = generateAccessToken(user);
            return {
                user,
                accessToken,
            };
        } catch (error) {
            throw error;
        }
    },
    confirmEmail: async (emailVerificationToken) => {
        try {
            const user = await User.findOne({
                where: { emailVerificationToken },
            });

            if (!user) {
                throw new UnauthorizedError("Token inválido", verifyToken);
            }
            user.emailVerificationToken = null;
            await user.save();
        } catch (error) {
            throw error;
        }
    },
    forgotPassword: async (email) => {
        try {
            const user = await User.findOne({
                where: { email },
            });

            if (!user) {
                throw new NotFoundError("Email", email);
            }

            if (user.emailVerificationToken) {
                throw new UnauthorizedError("Email not verified", null);
            }

            user.recoveryToken = generateEmailToken();
            await user.save();
            await sendForgotPasswordEmail(user.email, user.recoveryToken);
        } catch (error) {
            throw error;
        }
    },
    resetPassword: async (recoveryToken, password) => {
        try {
            const user = await User.findOne({
                where: { recoveryToken },
            });

            if (!user) {
                throw new UnauthorizedError("Token inválido", recoveryToken);
            }

            user.password = password;
            user.recoveryToken = null;
            await user.save();
        } catch (error) {
            throw error;
        }
    },

    registerOwner: async (ownerData) => {
        try {
            const owner = await ownerService.create(ownerData);
            return owner;
        } catch (error) {
            throw error;
        }
    },

    registerCompany: async (companyData) => {
        try {
            const company = await companyService.create(companyData);
            return company;
        } catch (error) {
            throw error;
        }
    },


};

export default authService;
