import { DataTypes } from 'sequelize';
import db from '../config/db.js';
import { ValidationError } from '../errors/index.js';

const Project = db.define(
  'Project',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
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
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    location: {
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
        validLocation(value) {
          if (!value.province || !value.canton) {
            throw new ValidationError(
              "location must contain 'province' and 'canton'.",
              location
            );
          }

          if (
            typeof value.province !== 'string' ||
            typeof value.canton !== 'string'
          ) {
            throw new ValidationError(
              'province and canton must be strings.',
              location
            );
          }

          if (value.province.length === 0 || value.canton.length === 0) {
            throw new ValidationError(
              'province and canton must not be empty.',
              location
            );
          }

          if (value.province.length > 255 || value.canton.length > 255) {
            throw new ValidationError(
              'province and canton must not exceed 255 characters.',
              location
            );
          }
        },
      },
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
        notEmpty: true,
        isAfter: {
          args: [new Date().toISOString()],
          msg: 'startDate must be a date after today.',
        },
      },
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
        notEmpty: true,
        isAfter: {
          args: [new Date().toISOString()],
          msg: 'endDate must be a date after today.',
        },
        ifEndDateAfterStartDate(value) {
          if (new Date(value) < new Date(this.startDate)) {
            throw new ValidationError(
              'endDate must be after startDate.',
              endDate
            );
          }
        },
      },
    },
    budget: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        min: {
          args: [0],
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

          if (typeof value.plan !== 'string') {
            throw new ValidationError(
              "plan must be a string.",
              pricing
            );
          }

          if (typeof value.billingCycle !== 'string') {
            throw new ValidationError(
              "billingCycle must be a string.",
              pricing
            );
          }

          /* if (typeof value.billingDate !== 'date') {
            throw new ValidationError(
              "billingDate must be a date.",
              pricing
            );
          } */
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

export default Project;
