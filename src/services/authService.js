import { User, Company } from '../models/index.js';
import bcrypt from 'bcrypt';
import sendVerificationEmail from '../utils/emails/verificationEmail.js';
import { generateEmailToken } from '../utils/tokens/emailVerifyToken.js';

const authService = {
  login: async (email, password) => {
    try {
      const user = await User.findOne({ where: { email } });
      const company = await Company.findOne({ where: { email } });

      if (!user && !company) {
        throw new Error('User not found');
      }

      if (user) {
        if (!user.isEmailVerified) {
          throw new Error('Email not verified');
        }

        if (!(await bcrypt.compare(password, user.password))) {
          throw new Error('Invalid password');
        }

        delete user.dataValues.password;

        return user;
      }

      if (company) {
        if (!company.isEmailVerified) {
          throw new Error('Email not verified');
        }

        if (!(await bcrypt.compare(password, company.password))) {
          throw new Error('Invalid password');
        }

        delete company.dataValues.password;

        return company;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  },

  register: async (userData) => {
    try {
      const user = await User.create({
        ...userData,
        isEmailVerified: false,
        verificationToken: generateEmailToken(),
        role: 'user',
      });

      delete user.dataValues.password;

      await sendVerificationEmail(user.email, user.verificationToken);

      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  registerCompany: async (companyData) => {
    try {
      const company = await Company.create({
        ...companyData,
        isEmailVerified: false,
        verificationToken: generateEmailToken(),
        role: 'company',
      });

      delete company.dataValues.password;

      await sendVerificationEmail(company.email, company.verificationToken);

      return company;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  verifyEmail: async (token) => {
    try {
      const user = await User.findOne({ where: { verificationToken: token } });
      const company = await Company.findOne({
        where: { verificationToken: token },
      });

      if (!user && !company) {
        throw new Error('Invalid token');
      }

      if (user) {
        user.isEmailVerified = true;
        user.verificationToken = null;
        await user.save();
      }

      if (company) {
        company.isEmailVerified = true;
        company.verificationToken = null;
        await company.save();
      }

      return { message: 'Email verified' };
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default authService;
