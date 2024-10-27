import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Owner = db.define(
  "Owner",
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
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
);

export default Owner;
