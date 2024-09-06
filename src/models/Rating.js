import { DataTypes } from "sequelize";
import db from "../config/db.js";
import Company from "./Company.js";

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
    const company = await Company.findByPk(company.CompanyId);
    const ratings = await Rating.findAll({
        where: { CompanyId: rating.CompanyId },
    });
    let sum = 0;
    ratings.forEach((rating) => {
        sum += rating.score;
    });
    company.rating = sum / ratings.length;
    await company.save();
};

export default Rating;
