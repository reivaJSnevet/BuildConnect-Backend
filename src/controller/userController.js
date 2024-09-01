import userService from '../services/userService.js';

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
};

export default userController;