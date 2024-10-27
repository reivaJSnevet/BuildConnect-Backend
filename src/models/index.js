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
Project.belongsTo(Owner, { foreignKey: { allowNull: false }, onDelete: 'Cascade', as: "projects" });

Project.belongsToMany(Category, { through: "project_category", as: "categories" });
Category.belongsToMany(Project, { through: "project_category", as: "categories" });

Project.belongsToMany(ProjectType, { through: "project_type", as: "types" });
ProjectType.belongsToMany(Project, { through: "project_type", as: "types" });

Owner.belongsToMany(Company, { through: Rating, as: "ratings" });
Company.belongsToMany(Owner, { through: Rating, as: "reviewers" });

Owner.belongsToMany(Company, { through: Comment, as: "comments" });
Company.belongsToMany(Owner, { through: Comment, as: "authors" });

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