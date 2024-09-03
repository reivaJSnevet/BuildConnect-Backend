import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Category = db.define(
    "Category",
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
        description: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    },
    {
        timestamps: false,
    }
    );

export default Category;