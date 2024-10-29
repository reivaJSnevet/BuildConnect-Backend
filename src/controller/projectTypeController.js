import projectTypeService from '../services/projectTypeService.js';

const projectTypeController = {
  create: async (req, res, next) => {
    try {
      const newProjectType = req.body;
      const projectType = await projectTypeService.create(newProjectType);
      res.status(201).json(projectType);
    } catch (error) {
      next(error);
    }
  },

  getAll: async (req, res, next) => {
    try {
      const projectTypes = await projectTypeService.getAll();
      res.status(200).json(projectTypes);
    } catch (error) {
      next(error);
    }
  },

  getById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const projectType = await projectTypeService.getById(id);
      res.status(200).json(projectType);
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const newValues = req.body;
      const projectType = await projectTypeService.update(id, newValues);
      res.status(200).json(projectType);
    } catch (error) {
      next(error);
    }
  },

  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await projectTypeService.delete(id);
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  },
};

export default projectTypeController;
