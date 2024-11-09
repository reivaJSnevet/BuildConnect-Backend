import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Category = db.define('Category', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
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
});

export default Category;
