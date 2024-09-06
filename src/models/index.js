import User from './User.js';
import Category from './Category.js';
import Company from './Company.js';
import Project from './Project.js';

User.hasMany(Project, {foreignKey: {allowNull: false},  onUpdate: 'Cascade'});
Project.belongsTo(User, {foreignKey: {allowNull: false},  onUpdate: 'Cascade'});

Category.hasMany(Project, {foreignKey: {allowNull: false},  onUpdate: 'Cascade'});
Project.belongsTo(Category, {foreignKey: {allowNull: false},  onUpdate: 'Cascade'});

User.hasMany(Comment, { foreignKey: { allowNull: false }, onDelete: 'Cascade' });
Comment.belongsTo(User, { foreignKey: { allowNull: false }, onDelete: 'Cascade' });

Company.hasMany(Comment, { foreignKey: { allowNull: false }, onDelete: 'Cascade' });
Comment.belongsTo(Company, { foreignKey: { allowNull: false }, onDelete: 'Cascade' });

User.belongsToMany(Company, { through: Rating, as: "ratings" });
Company.belongsToMany(User, { through: Rating, as: "ratings" });

export {
  User,
  Category,
  Company,
  Project
  
}