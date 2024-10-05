import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import db from "../config/db.js";

const User = db.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("user", "admin"),
      allowNull: false,
      defaultValue: "user",
    },
    isEmailVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    verificationToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accessToken: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    recoveryToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => await hashPassword(user),
      beforeBulkCreate: async (users) => await hashPasswordBulk(users),
      beforeUpdate: async (user) => {
        if (user.changed("password")) {
          await hashPassword(user);
        }
      },
    },
    defaultScope: {
      attributes:{exclude: ['password', 'verificationToken', 'refreshToken', 'recoveryToken']}
    },
    scopes: {
      withPassword: {
        attributes: { include: ['password'] },
      },
    },
  }
);

//Hooks
const hashPassword = async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
};

const hashPasswordBulk = async (users) => {
  for (const user of users) {
    await hashPassword(user);
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
