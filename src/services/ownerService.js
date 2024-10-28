import db from '../config/db.js';
import { Owner, User, Company, Rating } from '../models/index.js';
import { NotFoundError, ValidationError } from '../errors/index.js';

const ownerService = {
    create: async newOwner => {
        const transaction = await db.transaction();
        try {

            if (newOwner.role !== 'owner') {
                throw new ValidationError('Role must be owner', newOwner.role);
            }

            console.log('antes de crear el usuario');

            const owner = await User.create(newOwner, { include: Owner, transaction});

            console.log("llega aqui");
            await transaction.commit();

            delete owner.dataValues.password;

            return owner;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    },

    getAll: async () => {
        try {
            const owners = await User.findAll({
                include: Owner,
                attributes: {
                    exclude: ['password'],
                },
            });
            return owners;
        } catch (error) {
            throw error;
        }
    },

    getById: async id => {
        try {
            const owner = await User.findByPk(id, {
                include: Owner,
                attributes: {
                    exclude: ['password'],
                },
            });
            if (!owner) {
                throw new NotFoundError('User', id);
            }
            return owner;
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

            const owner = await user.getOwner();
            const updatedOwner = await owner.update(newValues);

            return updatedOwner;
        } catch (error) {
            throw error;
        }
    },

    delete: async id => {
        try {
            const owner = await User.findByPk(id);
            if (!owner) {
                throw new NotFoundError('User', id);
            }
            await owner.destroy();
            return `User with id: ${id} has been deleted`;
        } catch (error) {
            throw error;
        }
    },

    addRating: async (id, companyId, score) => {
        try {
            const user = await User.findByPk(id, {
                include: Owner,
            });

            if (!user || !user.Owner) {
                throw new NotFoundError('User', id);
            }

            const company = await Company.findByPk(companyId);
            if (!company) {
                throw new NotFoundError('Company', companyId);
            }

            user.Owner.addRating(company, { through: { score } });
            return user;
        } catch (error) {
            throw error;
        }
    },

    updateRating: async (id, companyId, score) => {
        try {
            const user = await User.findByPk(id, {
                include: Owner,
            });

            if (!user || !user.Owner) {
                throw new NotFoundError('User', id);
            }

            const company = await Company.findByPk(companyId);
            if (!company) {
                throw new NotFoundError('Company', companyId);
            }

            const rating = await Rating.findOne({
                where: {
                    ownerId: id,
                    companyId,
                },
            });

            if (!rating) {
                throw new ValidationError('User has not rated this company', companyId);
            }

            rating.score = score;
            await rating.save();

            return user;
        } catch (error) {
            throw error;
        }
    },
};

export default ownerService;
