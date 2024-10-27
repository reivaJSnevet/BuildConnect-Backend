import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import db from '../config/db.js';
import { ValidationError } from '../errors/index.js';

const User = db.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 255],
        },
      },
    },
    role: {
      type: DataTypes.ENUM('owner', 'company', 'admin'),
      allowNull: false,
    },
    contacts: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: { emails: [], numbers: [] },
      validate: {
        isJSON: (value) => {
          try {
            const string = JSON.stringify(value);
            JSON.parse(string);
          } catch (error) {
            throw new ValidationError(
              'The contacts field must be a valid JSON object.',
              contacts
            );
          }
        },
        isValidStructure(value) {
          if (
            typeof value !== 'object' ||
            !Array.isArray(value.emails) ||
            !Array.isArray(value.numbers)
          ) {
            throw new ValidationError(
              "The contacts field must be an object with 'emails' and 'numbers' arrays.",
              contacts
            );
          }
        },
      },
    },
    emailVerificationToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    recoveryToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    refreshToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        await verifyOnetoOneAssociation(user);
        await hashPassword(user);
      },
      beforeBulkCreate: async (users) => await hashPasswordBulk(users),
      beforeUpdate: async (user) => {
        if (user.changed('password')) {
          await hashPassword(user);
        }
      },
    },
    defaultScope: {
      attributes: {
        exclude: [
          'password',
          'emailVerificationToken',
          'recoveryToken',
          'refreshToken',
        ],
      },
    },
    scopes: {
      withSensitiveData: {
        attributes: {
          include: [
            'password',
            'emailVerificationToken',
            'recoveryToken',
            'refreshToken',
          ],
        },
      },
    },
  }
);

// Hooks
const hashPassword = async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
};

const hashPasswordBulk = async (users) => {
  for (const user of users) {
    await hashPassword(user);
  }
};

const verifyOnetoOneAssociation = async (user) => {
  const owner = await user.getOwner();
  const company = await user.getCompany();
  if (owner && company) {
    throw new Error('The user is already associated');
  }
};

/**
 * Validates the provided password against the user's password.
 * @param {string} password - The password to validate.
 * @returns {Promise<boolean>} - A promise that resolves to true if the password is valid, false otherwise.
 */
User.prototype.validatePassword = function (password) {
  if (!this.password || !password) {
    return false;
  }
  return bcrypt.compare(password, this.password);
};

export default User;
