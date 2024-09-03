import { Company } from "../models/index.js";

const companyService = {
    create: async (newCompany) => {
        try {
        const company = await Company.create(newCompany);
        return company;
        } catch (error) {
        throw error;
        }
    },
    
    getAll: async () => {
        try {
        const companies = await Company.findAll();
        return companies;
        } catch (error) {
        throw error;
        }
    },
    
    getById: async (id) => {
        try {
        const company = await Company.findByPk(id);
        if (!company) {
            throw new Error(`Company not found with id: ${id}`);
        }
        return company;
        } catch (error) {
        throw error;
        }
    },

    update: async (id, updatedCompany) => {
        try {
        const company = await Company.findByPk(id);
        if (!company) {
            throw new Error(`Company not found with id: ${id}`);
        }
        const updated = await company.update(updatedCompany);
        return updated;
        } catch (error) {
        throw error;
        }
    },

    delete: async (id) => {
        try {
        const company = await Company.findByPk(id);
        if (!company) {
            throw new Error(`Company not found with id: ${id}`);
        }
        await company.destroy();
        return `Company with id: ${id} has been deleted`;
        } catch (error) {
        throw error;
        }
    },
};

export default companyService;