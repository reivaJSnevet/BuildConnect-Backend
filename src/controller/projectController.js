import projectService from '../services/projectService.js';

const projectController = {
	create: async (req, res, next) => {
		try {
			const newProject = req.body;
			const project = await projectService.create(newProject);
			res.status(201).json(project);
		} catch (error) {
			next(error);
		}
	},

	getAll: async (req, res, next) => {
		try {
			const projects = await projectService.getAll(req.plan);
			res.status(200).json(projects);
		} catch (error) {
			next(error);
		}
	},

	getById: async (req, res, next) => {
		try {
			const { id } = req.params;
			const project = await projectService.getById(id);
			res.status(200).json(project);
		} catch (error) {
			next(error);
		}
	},

	update: async (req, res, next) => {
		try {
			const { id } = req.params;
			const updatedProject = req.body;
			const project = await projectService.update(id, updatedProject);
			res.status(200).json(project);
		} catch (error) {
			next(error);
		}
	},

	delete: async (req, res, next) => {
		try {
			const { id } = req.params;
			const project = await projectService.delete(id);
			res.status(200).json(project);
		} catch (error) {
			next(error);
		}
	},

	addCategory: async (req, res, next) => {
		try {
			const { id, categoryId } = req.params;
			const message = await projectService.addCategory(id, categoryId);
			res.status(200).json(message);
		} catch (error) {
			next(error);
		}
	},

	removeCategory: async (req, res, next) => {
		try {
			const { id, categoryId } = req.params;
			const message = await projectService.removeCategory(id, categoryId);
			res.status(200).json(message);
		} catch (error) {
			next(error);
		}
	},

	addType: async (req, res, next) => {
		try {
			const { id, typeId } = req.params;
			const message = await projectService.addType(id, typeId);
			res.status(200).json(message);
		} catch (error) {
			next(error);
		}
	},

	removeType: async (req, res, next) => {
		try {
			const { id, typeId } = req.params;
			const message = await projectService.removeType(id, typeId);
			res.status(200).json(message);
		} catch (error) {
			next(error);
		}
	},
};

export default projectController;
