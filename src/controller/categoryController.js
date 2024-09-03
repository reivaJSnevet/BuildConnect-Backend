import categoryService from "../services/categoryService.js";

const categoryController = {
  create: async (req, res) => {
    try {
      const newCategory = req.body;
      const category = await categoryService.create(newCategory);
      res.status(201).json(category);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const categories = await categoryService.getAll();
      res.status(200).json(categories);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await categoryService.getById(id);
      res.status(200).json(category);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedCategory = req.body;
      const category = await categoryService.update(id, updatedCategory);
      res.status(200).json(category);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await categoryService.delete(id);
      res.status(200).json(category);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

export default categoryController;
