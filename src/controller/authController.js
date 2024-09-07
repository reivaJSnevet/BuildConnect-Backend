import authService from '../services/authService.js';

const authController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await authService.login(email, password);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  registerUser: async (req, res) => {
    try {
      const user = await authService.register(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  registerCompany: async (req, res) => {
    try {
      const company = await authService.registerCompany(req.body);
      res.status(201).json(company);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  verifyEmail: async (req, res) => {
    try {
      const { token } = req.params;
      await authService.verifyEmail(token);
      res.status(200).json({ message: 'Email verified' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

export default authController;
