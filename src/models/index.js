import User from './User.js';
import Category from './Category.js';
import Company from './Company.js';
import Project from './Project.js';

User.hasMany(Project, {foreignKey: {allowNull: false},  onUpdate: 'Cascade'});
Project.belongsTo(User, {foreignKey: {allowNull: false},  onUpdate: 'Cascade'});

Category.hasMany(Project, {foreignKey: {allowNull: false},  onUpdate: 'Cascade'});
Project.belongsTo(Category, {foreignKey: {allowNull: false},  onUpdate: 'Cascade'});

export {
  User,
  Category,
  Company,
  Project
  
}