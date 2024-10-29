import { Category } from "../models/index.js";
import { NotFoundError } from "../errors/index.js";

const categoryService = {
    create: async (newCategory) => {
        try {
        const category = await Category.create(newCategory);
        return category;
        } catch (error) {
        throw error;
        }
    },
    
    getAll: async () => {
        try {
        const categories = await Category.findAll();
        return categories;
        } catch (error) {
        throw error;
        }
    },
    
    getById: async (id) => {
        try {
        const category = await Category.findByPk(id);
        if (!category) {
            throw new NotFoundError("Category", id); 
        }
        return category;
        } catch (error) {
        throw error;
        }
    },
    
    update: async (id, updatedCategory) => {
        try {
        const category = await Category.findByPk(id);
        if (!category) {
            throw new NotFoundError("Category", id);
        }
        const updated = await category.update(updatedCategory);
        return updated;
        } catch (error) {
        throw error;
        }
    },
    
    delete: async (id) => {
        try {
        const category = await Category.findByPk(id);
        if (!category) {
            throw new NotFoundError("Category", id);
        }
        await category.destroy();
        return `Category with id: ${id} has been deleted`;
        } catch (error) {
        throw error;
        }
    },
    };

export default categoryService;