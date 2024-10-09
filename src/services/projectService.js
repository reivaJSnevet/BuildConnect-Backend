import { Project, Category, User } from '../models/index.js';

const projectService = {
    create: async (newProject) => {
        try {
        const project = await Project.create(newProject);
        return project;
        } catch (error) {
        throw error;
        }
    },
    
    getAll: async () => {
        try {
          const projects = await Project.findAll({
            include: [
              { model: Category, attributes: ['name'] },
              { model: User, attributes: ['name', 'lastName'] },
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
            { model: Category, attributes: ['name'] },
            { model: User, attributes: ['name', 'lastName'] },
          ],
        });
        if (!project) {
            throw new Error(`Project not found with id: ${id}`);
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
            throw new Error(`Project not found with id: ${id}`);
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
            throw new Error(`Project not found with id: ${id}`);
        }
        await project.destroy();
        return `Project with id: ${id} has been deleted`;
        } catch (error) {
        throw error;
        }
    },
};

export default projectService;