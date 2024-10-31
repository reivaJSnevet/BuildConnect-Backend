import User from './User.js';
import Category from './Category.js';
import Company from './Company.js';
import Project from './Project.js';
import Comment from './Comment.js';
import Rating from './Rating.js';
import Owner from './Owner.js';
import ProjectType from './ProjectType.js';

Owner.belongsTo(User, { foreignKey: { allowNull: false }, onDelete: 'Cascade' });
User.hasOne(Owner, { foreignKey: { allowNull: false }, onDelete: 'Cascade' });

Company.belongsTo(User, { foreignKey: { allowNull: false }, onDelete: 'Cascade' });
User.hasOne(Company, { foreignKey: { allowNull: false }, onDelete: 'Cascade' });

Owner.hasMany(Project, { foreignKey: { allowNull: false }, onDelete: 'Cascade', as: "projects" });
Project.belongsTo(Owner, { foreignKey: { allowNull: false }, onDelete: 'Cascade', as: "Owner" });

Project.belongsToMany(Category, { through: "project_category", as: "categories" });
Category.belongsToMany(Project, { through: "project_category", as: "categories" });

Project.belongsToMany(ProjectType, { through: "project_type", as: "types" });
ProjectType.belongsToMany(Project, { through: "project_type", as: "types" });

Owner.belongsToMany(Company, { through: Rating, as: "ratings" });
Company.belongsToMany(Owner, { through: Rating, as: "reviewers" });

Owner.hasMany(Comment, { foreignKey: { allowNull: false }, onDelete: "CASCADE" });
Comment.belongsTo(Owner, { foreignKey: { allowNull: false }, onDelete: "CASCADE" });

Company.hasMany(Comment, { foreignKey: { allowNull: false }, onDelete: "CASCADE" });
Comment.belongsTo(Company, { foreignKey: { allowNull: false }, onDelete: "CASCADE" });

Owner.belongsToMany(Company, { through: "rating_permission", onDelete: 'Cascade', as: "permissions" });
Company.belongsToMany(Owner, { through : "rating_permission", onDelete: 'Cascade', as: "permissions" });

Company.belongsToMany(Project, { through: "project_bookmark", onDelete: 'Cascade', as: "bookmarks" });
Project.belongsToMany(Company, { through: "project_bookmark", onDelete: 'Cascade', as: "bookmarks" });

export {
  User,
  Category,
  Company,
  Project,
  Comment,
  Rating,
  Owner,
  ProjectType,
}