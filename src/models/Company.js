import { DataTypes } from 'sequelize';
import db from '../config/db.js';
import { ValidationError } from '../errors/index.js';

const Company = db.define(
  'Company',
  {
    legalId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: {
          args: [1, 255],
        },
      },
    },
    description: {
      type: DataTypes.TEXT('long'),
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    mission: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    vision: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    address: {
      type: DataTypes.JSON,
      allowNull: false,
      validate: {
        notEmpty: true,
        isJSON: (value) => {
          try {
            const string = JSON.stringify(value);
            JSON.parse(string);
          } catch (error) {
            throw new ValidationError(
              'location must be a valid JSON object.',
              location
            );
          }
        },
        validAddress(value) {
          const requiredKeys = [
            'province',
            'canton',
            'district',
            'streetDetails',
          ];
          for (const key of requiredKeys) {
            if (!(key in value)) {
              throw new ValidationError(
                `address must contain '${key}'.`,
                address
              );
            }
          }
        },
      },
    },
    pricing: {
      type: DataTypes.JSON,
      allowNull: false,
      validate: {
        notEmpty: true,
        isJSON: (value) => {
          try {
            const string = JSON.stringify(value);
            JSON.parse(string);
          } catch (error) {
            throw new ValidationError(
              'pricing must be a valid JSON object.',
              pricing
            );
          }
        },
        validPricing(value) {
          const requiredKeys = ['plan', 'billingCycle', 'billingDate'];
          for (const key of requiredKeys) {
            if (!(key in value)) {
              throw new ValidationError(
                `pricing must contain the key '${key}'.`,
                pricing
              );
            }
          }
        },
      },
    },
    rating: {
      type: DataTypes.NUMBER,
      allowNull: true,
      validate: {
        isNumeric: true,
        min: {
          args: [0],
        },
        max: {
          args: [5],
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

export default Company;
