import db from '../config/db.js';
import { Company, User, Project, Comment, Owner } from '../models/index.js';
import { NotFoundError } from '../errors/index.js';

const companyService = {
	create: async (newCompany) => {
		const transaction = await db.transaction();
		try {
			if (newCompany.role !== 'company') {
				throw new ValidationError('Role must be company', 'role');
			}

			const company = await User.create(newCompany, { include: Company, transaction });
			await transaction.commit();

			delete company.dataValues.password;
			delete company.dataValues.emailVerificationToken;

			return company;
		} catch (error) {
			await transaction.rollback();
			throw error;
		}
	},

	getAll: async () => {
		try {
			const companies = await User.findAll({
				include: [
					{
						model: Company,
                        required: true,
						include: [
							{
								model: Project,
								as: 'bookmarks',
							},
							{
								model: Comment,
                                include: [
                                    {
                                        model: Owner
                                    }
                                ]
							},
						],
					},
				],
			});
			return companies;
		} catch (error) {
			throw error;
		}
	},

	getById: async (id) => {
		try {
			const company = await User.findByPk(id, {
				include: [
					{
						model: Company,
						include: [
							{
								model: Project,
								as: 'bookmarks',
							},
							{
								model: Comment,
                                include: [
                                    {
                                        model: Owner
                                    }
                                ]
							},
						],
					},
				],
			});
			if (!company || !company.Company) {
				throw new NotFoundError('User', id);
			}
			return company;
		} catch (error) {
			throw error;
		}
	},

	update: async (id, newValues) => {
		const transaction = await db.transaction();
		try {
			const user = await User.findByPk(id, {
				include: Company,
			});
			if (!user || !user.Company) {
				throw new NotFoundError('User', id);
			}

			await user.Company.update(newValues.Company, { transaction });
			await user.Company.save();

			await user.update(newValues, { transaction });
			await transaction.commit();

			await transaction.commit();
			return await User.findByPk(id, {
				include: Company,
			});
		} catch (error) {
			await transaction.rollback();
			throw error;
		}
	},

	delete: async (id) => {
		try {
			const company = await User.findByPk(id);
			if (!company || !company.Company) {
				throw new NotFoundError('User', id);
			}

			await company.destroy();
			return `User with id: ${id} has been deleted`;
		} catch (error) {
			throw error;
		}
	},

	addBookmark: async (companyId, projectId) => {
		try {
			const user = await User.findByPk(companyId, {
				include: Company,
			});

			if (!user || !user.Company) {
				throw new NotFoundError('User', companyId);
			}

			const project = await Project.findByPk(projectId);
			if (!project) {
				throw new NotFoundError('Project', projectId);
			}

			await user.Company.addBookmark(project);
			return user;
		} catch (error) {
			throw error;
		}
	},

	removeBookmark: async (companyId, projectId) => {
		try {
			const user = await User.findByPk(companyId, {
				include: Company,
			});

			if (!user || !user.Company) {
				throw new NotFoundError('User', companyId);
			}

			const project = await Project.findByPk(projectId);
			if (!project) {
				throw new NotFoundError('Project', projectId);
			}

			await user.Company.removeBookmark(project);
			return user;
		} catch (error) {
			throw error;
		}
	},
};

export default companyService;
