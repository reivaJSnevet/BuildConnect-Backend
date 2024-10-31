import { ProjectType } from "../models/index.js";
import { NotFoundError } from "../errors/index.js";

const projectTypeService = {
    create: async (newCategory) => {
        try {
        const projectType = await ProjectType.create(newCategory);
        return projectType;
        } catch (error) {
        throw error;
        }
    },
    
    getAll: async () => {
        try {
        const categories = await ProjectType.findAll();
        return categories;
        } catch (error) {
        throw error;
        }
    },
    
    getById: async (id) => {
        try {
        const projectType = await ProjectType.findByPk(id);
        if (!projectType) {
            throw new NotFoundError("ProjectType", id); 
        }
        return projectType;
        } catch (error) {
        throw error;
        }
    },
    
    update: async (id, newValue) => {
        try {
        const projectType = await ProjectType.findByPk(id);
        if (!projectType) {
            throw new NotFoundError("ProjectType", id);
        }
        const updated = await projectType.update(newValue);
        return updated;
        } catch (error) {
        throw error;
        }
    },
    
    delete: async (id) => {
        try {
        const projectType = await ProjectType.findByPk(id);
        if (!projectType) {
            throw new NotFoundError("ProjectType", id);
        }
        await projectType.destroy();
        return `ProjectType with id: ${id} has been deleted`;
        } catch (error) {
        throw error;
        }
    },
    };

export default projectTypeService;