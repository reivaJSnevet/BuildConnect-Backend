import categoryService from "../services/categoryService.js";

const categoryController = {
  create: async (req, res, next) => {
    try {
      const newCategory = req.body;
      const category = await categoryService.create(newCategory);
      res.status(201).json(category);
    } catch (error) {
      next(error);
    }
  },

  getAll: async (req, res, next) => {
    try {
      const categories = await categoryService.getAll();
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  },

  getById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await categoryService.getById(id);
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedCategory = req.body;
      const category = await categoryService.update(id, updatedCategory);
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  },

  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await categoryService.delete(id);
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  },
};

export default categoryController;
