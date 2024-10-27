import { DataTypes } from "sequelize";
import db from "../config/db.js";
import Company from "./Company.js";
import { NotFoundError } from "../errors/index.js";

const Rating = db.define(
    "Rating",
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
        },
        score: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate:{
                min: 0,
                max: 5,
            }

        },
    },
    {
        hooks: {
            afterCreate: async (rating) => await calculateRating(rating),
            afterUpdate: async (rating) => await calculateRating(rating),
            afterDestroy: async (rating) => await calculateRating(rating),
            afterBulkCreate: async (ratings) => {
                for (const rating of ratings) {
                    await calculateRating(rating);
                }
            },
        },
    }
);

//Hooks
const calculateRating = async (rating) => {
  try {
    const company = await Company.findByPk(rating.CompanyId);
    if (!company) {
      throw new NotFoundError('Company', rating.CompanyId);
    }

    const ratings = await Rating.findAll({
      where: { CompanyId: rating.CompanyId },
    });

    if (ratings.length === 0) {
      company.rating = 0;
      await company.save();
      return;
    }

    const sum = ratings.reduce((acc, curr) => acc + curr.score, 0);
    
    company.rating = sum / ratings.length;
    await company.save();

  } catch (error) {
    console.error("Error calculating rating:", error.message);
  }
};

export default Rating;
