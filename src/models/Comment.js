import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Comment = db.define(
  'Comment',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    text: {
      type: DataTypes.TEXT('medium'),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default Comment;
