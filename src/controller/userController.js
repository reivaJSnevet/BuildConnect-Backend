import userService from "../services/userService.js";

const userController = {
  create: async (req, res) => {
    try {
      const newUser = req.body;
      const user = await userService.create(newUser);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const users = await userService.getAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userService.getById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedUser = req.body;
      const user = await userService.update(id, updatedUser);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userService.delete(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  addPermission: async (req, res) => {
    try {
      const { userId, companyId } = req.params;
      const user = await userService.addPermission(userId, companyId);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  removePermission: async (req, res) => {
    try {
      const { userId, companyId } = req.params;
      const user = await userService.removePermission(userId, companyId);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

};

export default userController;
