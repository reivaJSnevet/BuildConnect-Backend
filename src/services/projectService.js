import { Project, Category, User, Owner, ProjectType } from '../models/index.js';
import { NotFoundError } from '../errors/index.js';

const projectService = {
    create: async (newProject) => {
        try {

          const owner = await User.findByPk(newProject.UserId, {
            include: {
              model: Owner,
            }
          });
          if (!owner || !owner.Owner) {
            throw new NotFoundError('Owner', newProject.UserId);
          }

          const project = await owner.Owner.createProject(newProject);
          return project;
        } catch (error) {
        throw error;
        }
    },
    
    getAll: async () => {
        try {
          const projects = await Project.findAll({
            include: [
              { model: Category, as: 'categories', through: { attributes: [] } },
              { model: ProjectType, as: 'types', through: { attributes: [] } },
            ],
          });
        return projects;
        } catch (error) {
        throw error;
        }
    },
    
    getById: async (id) => {
        try {
        const project = await Project.findByPk(id, {
          include: [
            { model: Category, as: 'categories', through: { attributes: [] } },
            { model: ProjectType, as: 'types', through: { attributes: [] } },
            { model: Owner, as: 'Owner', include: { model: User, attributes: { exclude: ['password'] } } },
          ],
        });
        if (!project) {
            throw new NotFoundError('Project', id);
        }
        return project;
        } catch (error) {
        throw error;
        }
    },
    update: async (id, updatedProject) => {
        try {
        const project = await Project.findByPk(id);
        if (!project) {
            throw new NotFoundError('Project', id);
        }
        const updated = await project.update(updatedProject);
        return updated;
        } catch (error) {
        throw error;
        }
    },
    delete: async (id) => {
        try {
        const project = await Project.findByPk(id);
        if (!project) {
            throw new NotFoundError('Project', id);
        }
        await project.destroy();
        return `Project with id: ${id} has been deleted`;
        } catch (error) {
        throw error;
        }
    },

    addCategory: async (projectId, categoryId) => {
      try {
        const project = await Project.findByPk(projectId);
        if (!project) {
          throw new NotFoundError('Project', projectId);
        }
        const category = await Category.findByPk(categoryId);
        if (!category) {
          throw new NotFoundError('Category', categoryId);
        }
        await project.addCategories(category);
        return { message: 'Category added to the project successfully' };
      } catch (error) {
        throw error;
      }
    },

    removeCategory: async (projectId, categoryId) => {
      try {
        const project = await Project.findByPk(projectId);
        if (!project) {
          throw new NotFoundError('Project', projectId);
        }
        const category = await Category.findByPk(categoryId);
        if (!category) {
          throw new NotFoundError('Category', categoryId);
        }
        await project.removeCategories(category);
        return { message: 'Category removed from the project successfully' };
      } catch (error) {
        throw error;
      }
    },

    addType: async (projectId, typeId) => {
      try {
        const project = await Project.findByPk(projectId);
        if (!project) {
          throw new NotFoundError('Project', projectId);
        }
        const type = await ProjectType.findByPk(typeId);
        if (!type) {
          throw new NotFoundError('Type', typeId);
        }
        await project.addTypes(type);
        return { message: 'Type added to the project successfully' };
      } catch (error) {
        throw error;
      }
    },

    removeType: async (projectId, typeId) => {
      try {
        const project = await Project.findByPk(projectId);
        if (!project) {
          throw new NotFoundError('Project', projectId);
        }
        const type = await ProjectType.findByPk(typeId);
        if (!type) {
          throw new NotFoundError('Type', typeId);
        }
        await project.removeTypes(type);
        return { message: 'Type removed from the project successfully' };
      } catch (error) {
        throw error;
      }
    },

};

export default projectService;