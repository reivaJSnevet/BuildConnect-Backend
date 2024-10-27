import { User } from '../models/index.js';
import { ForbiddenError, NotFoundError } from '../errors/index.js';
import { generateEmailToken } from '../utils/tokens/emailVerifyToken.js';
import sendVerificationEmail from '../utils/emails/verificationEmail.js';

const userService = {
    create: async newUser => {
        try {
            if (newUser.role === 'admin') {
                throw new ForbiddenError('create an admin user', 'Admin users cannot be created', 'N/A');
            }

            newUser.emailVerificationToken = generateEmailToken();
            const user = await User.create(newUser);

            /* await sendVerificationEmail(user.email, user.emailVerificationToken); */

            delete user.dataValues.password;
            delete user.dataValues.emailVerificationToken;

            return user;
        } catch (error) {
            throw error;
        }
    },

    getAll: async () => {
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            throw error;
        }
    },

    getById: async id => {
        try {
            const user = await User.findByPk(id);
            if (!user) {
                throw new NotFoundError('User', id);
            }
            return user;
        } catch (error) {
            throw error;
        }
    },

    update: async (id, newValues) => {
        try {
            const user = await User.findByPk(id);
            if (!user) {
                throw new NotFoundError('User', id);
            }
            const updated = await user.update(newValues);
            return updated;
        } catch (error) {
            throw error;
        }
    },

    delete: async id => {
        try {
            const user = await User.findByPk(id);
            if (!user) {
                throw new NotFoundError('User', id);
            }
            await user.destroy();
            return `User with id: ${id} has been deleted`;
        } catch (error) {
            throw error;
        }
    },

    addPermission: async (userId, companyId) => {
        try {
            const user = await User.findByPk(userId);
            if (!user) {
                throw new NotFoundError('User', userId);
            }
            await user.addPermission(companyId);
            return user;
        } catch (error) {
            throw error;
        }
    },

    removePermission: async (userId, companyId) => {
        try {
            const user = await User.findByPk(userId);
            if (!user) {
                throw new NotFoundError('User', userId);
            }
            await user.removePermission(companyId);
            return user;
        } catch (error) {
            throw error;
        }
    },

    addRating: async (userId, companyId, score) => {
        try {
            const companyCompanyId = companyId;
            const user = await User.findByPk(userId);
            if (!user) {
                throw new NotFoundError('User', userId);
            }
            await user.addRating(companyCompanyId, {
                through: {
                    score,
                },
            });
            return user;
        } catch (error) {
            throw error;
        }
    },

    updateRating: async (userId, companyId, score) => {
        try {
            const companyCompanyId = companyId;
            const user = await User.findByPk(userId);
            if (!user) {
                throw new NotFoundError('User', userId);
            }
            await user.addRating(companyCompanyId, {
                through: {
                    score,
                },
                update: true,
            });
            return user;
        } catch (error) {
            throw error;
        }
    },
};

export default userService;
