import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import db from "../config/db.js";

const Company = db.define(
  "Company",
  {
    companyId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    legalId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
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
    role:{
      type: DataTypes.ENUM("company"),
      allowNull: false,
      defaultValue: "company",
    },
    phone: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pricing: {
        type: DataTypes.JSON,
        allowNull: false,
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
    refreshToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    recoveryToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    hooks: {
      beforeCreate: async (company) => await hashPassword(company),
      beforeBulkCreate: async (companies) => await hashPasswordBulk(companies),
      beforeUpdate: async (company) => {
        if (company.changed("password")) {
          await hashPassword(company);
        }
      },
    },
  }
);

//hooks

const hashPassword = async (company) => {
  const salt = await bcrypt.genSalt(10);
  company.password = await bcrypt.hash(company.password, salt);
};

const hashPasswordBulk = async (companies) => {
  for (const company of companies) {
    await hashPassword(company);
  }
};

/**
 * Validates the provided password against the user's password.
 * @param {string} password - The password to validate.
 * @returns {Promise<boolean>} - A promise that resolves to true if the password is valid, false otherwise.
 */
Company.prototype.validatePassword = function (password) {
  if (!this.password || !password) {
    return false;
  }
  return bcrypt.compare(password, this.password);
};

export default Company;
