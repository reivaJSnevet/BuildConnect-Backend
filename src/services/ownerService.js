import db from '../config/db.js';
import { Owner, User, Company, Rating, Category, ProjectType } from '../models/index.js';
import { NotFoundError, ValidationError } from '../errors/index.js';
import Project from '../models/Project.js';

const ownerService = {
    create: async newOwner => {
        const transaction = await db.transaction();
        try {

            if (newOwner.role !== 'owner') {
                throw new ValidationError('Role must be owner', 'role');
            }

            const owner = await User.create(newOwner, { include: Owner, transaction});
            await transaction.commit();

            delete owner.dataValues.password;
            delete owner.dataValues.emailVerificationToken;

            return owner;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    },

    getAll: async () => {
        try {
            const owners = await User.findAll({
                include: {
                    model: Owner,
                    required: true,
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
                include: [
                    {
                        model: Owner,
                        include: {
                            model: Project,
                            as: 'projects',
                            include:[
                                {
                                    model: Category,
                                    as: 'categories',
                                    through: { attributes: []}
                                },
                                {
                                    model: ProjectType,
                                    as: 'types',
                                    through: { attributes: []}
                                }
                            ]
                        }
                    }
                ]
            });
            if (!owner || !owner.Owner) {
                throw new NotFoundError('User', id);
            }
            return owner;
        } catch (error) {
            throw error;
        }
    },

    update: async (id, newValues) => {
        const transaction = await db.transaction();
        try {
            const user = await User.findByPk(id, {
                include: Owner,
            });

            if (!user || !user.Owner) {
                throw new NotFoundError('User', id);
            }

            await user.Owner.update(newValues.Owner, { transaction });
            await user.Owner.save();

            await user.update(newValues, { transaction });
            await user.save();

            await transaction.commit();
            return await User.findByPk(id, {
                include: Owner,
            });
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    },

    delete: async id => {
        try {
            const owner = await User.findByPk(id);
            if (!owner || !owner.Owner) {
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

            const company = await User.findByPk(companyId, {
                include: Company,
            });
            if (!company || !company.Company) {
                throw new NotFoundError('Company', companyId);
            }

            const hasPermission = await user.Owner.hasPermission(company.Company.legalId);
            if (!hasPermission) {
                throw new ValidationError('User does not have permission to rate this company', 'companyId');
            }

            const hasRating = await user.Owner.hasRating(company.Company.legalId);
            if (hasRating) {
                throw new ValidationError('User has already rated this company', 'companyId');
            }

            await user.Owner.addRating(company.Company.legalId, { through: { score } });
            return { message: 'Rating added successfully' };
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

            const company = await User.findByPk(companyId, {
                include: Company,
            });
            if (!company) {
                throw new NotFoundError('Company', companyId);
            }

            const rating = await Rating.findOne({
                where: {
                    OwnerId: user.Owner.id,
                    CompanyLegalId: company.Company.legalId,
                },
            });

            if (!rating) {
                throw new ValidationError('User has not rated this company', companyId);
            }

            rating.score = score;
            await rating.save();

            return { message: 'Rating updated successfully' };
        } catch (error) {
            throw error;
        }
    },


    addPermission: async (id, companyId) => {
        try {
            const user = await User.findByPk(id, {
                include: Owner,
            });
            if (!user || !user.Owner) {
                throw new NotFoundError('User', id);
            }

            const company = await User.findByPk(companyId, {
                include: Company,
            });
            if (!company || !company.Company) {
                throw new NotFoundError('Company', companyId);
            }

            const hasPermission = await user.Owner.hasPermission(company.Company.legalId);
            if (hasPermission) {
                throw new ValidationError('User already has permission to rate this company', 'companyId');
            }

            await user.Owner.addPermission(company.Company.legalId);
            return { message: 'Permission added successfully' };

        } catch (error) {
            throw error;
        }
    },

    removePermission: async (id, companyId) => {
        try {
            const user = await User.findByPk(id, {
                include: Owner,
            });
            if (!user || !user.Owner) {
                throw new NotFoundError('User', id);
            }

            const company = await User.findByPk(companyId, {
                include: Company,
            });
            if (!company || !company.Company) {
                throw new NotFoundError('Company', companyId);
            }

            const hasPermission = await user.Owner.hasPermission(company.Company.legalId);
            if (!hasPermission) {
                throw new ValidationError('User does not have permission to rate this company', 'companyId');
            }

            await user.Owner.removePermission(company.Company.legalId);
            return { message: 'Permission removed successfully' };
        } catch (error) {
            throw error;
        }
    },

    getPermissions: async id => {
        try {
            const user = await User.findByPk(id, {
                include: Owner,
            });
            if (!user || !user.Owner) {
                throw new NotFoundError('User', id);
            }

            const permissions = await user.Owner.getPermissions();
            return permissions;
        } catch (error) {
            throw error;
        }
    },
};

export default ownerService;
