import User from './User.js';
import Category from './Category.js';
import Company from './Company.js';
import Project from './Project.js';
import Comment from './Comment.js';
import Rating from './Rating.js';

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

User.belongsToMany(Company, { through: "permission", as: "permissions" });
Company.belongsToMany(User, { through : "permission", as: "permissions" });

Company.belongsToMany(Project, { through: "projectBookmark", as: "bookmarks" });
Project.belongsToMany(Company, { through: "projectBookmark", as: "bookmarks" });

export {
  User,
  Category,
  Company,
  Project,
  Comment,
  Rating,
}