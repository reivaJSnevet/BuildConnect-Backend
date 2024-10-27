import userService from '../services/userService.js';

const userController = {
	create: async (req, res, next) => {
		try {
			const { id, email, password, role, contacts } = req.body;
			const newUser = { id, email, password, role, contacts };

			const user = await userService.create(newUser);

			res.status(201).json(user);
		} catch (error) {
			next(error);
		}
	},

	getAll: async (req, res, next) => {
		try {
			const users = await userService.getAll();
			res.status(200).json(users);
		} catch (error) {
			next(error);
		}
	},

	getById: async (req, res, next) => {
		try {
			const { id } = req.params;
			const user = await userService.getById(id);
			res.status(200).json(user);
		} catch (error) {
			next(error);
		}
	},

	update: async (req, res, next) => {
		try {
			const { id } = req.params;
      const { email, contacts } = req.body;
      const newValues = { email, contacts };

			const user = await userService.update(id, newValues);
			res.status(200).json(user);
		} catch (error) {
			next(error);
		}
	},

	delete: async (req, res, next) => {
		try {
			const { id } = req.params;
			const user = await userService.delete(id);
			res.status(200).json(user);
		} catch (error) {
			next(error);
		}
	},
};

export default userController;
