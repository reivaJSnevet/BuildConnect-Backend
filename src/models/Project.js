import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Project = db.define(
    "Project",
    {
        id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        },
        title: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        description: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        location: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        projectType: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        starDate: {
        type: DataTypes.DATE,
        allowNull: false,
        },
        endDate: {
        type: DataTypes.DATE,
        allowNull: false,
        },
        budget: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
        isFeactured: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        },
    },
    {
        timestamps: false,
    }
    );

export default Project;