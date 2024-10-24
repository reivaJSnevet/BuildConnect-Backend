import authService from '../services/authService.js';

const authController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const { user, company, accessToken } = await authService.login(
        email,
        password
      );

      if (user) {
        res.cookie('access_token', accessToken, {
          httpOnly: true,
          sameSite: 'none',
          secure: true,
          /* signed: true, */
          maxAge: 86400000,
        });

        res.status(200).json({ user, accessToken });
      } else {
        res.cookie('access_token', accessToken, {
          httpOnly: true,
          sameSite: 'none',
          secure: true,
          /* signed: true, */
          maxAge: 86400000,
        });

        res.status(200).json({ company, accessToken });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  registerUser: async (req, res, next) => {
    try {
      const user = await authService.register(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  },

  registerCompany: async (req, res, next) => {
    try {
      const company = await authService.registerCompany(req.body);
      res.status(201).json(company);
    } catch (error) {
      next(error);
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

  refreshToken: async (req, res) => {
    try {
      const expiredToken = req.cookies.access_token;
      const { accessToken, user, company } = await authService.refreshToken(expiredToken);

      res.cookie('access_token', accessToken, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
        /* signed: true, */
        maxAge: 86400000,
      });

      res.status(200).json({ accessToken, user, company });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  logout: async (req, res) => {
    try {

      const access_token = req.cookies.access_token;

      await authService.logout(access_token);
      
      res.clearCookie('access_token');
      res.status(200).json({ message: 'Logged out' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

export default authController;
