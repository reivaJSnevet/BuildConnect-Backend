import companyService from "../services/companyService.js";

const companyController = {
    create: async (req, res, next) => {
        try {
        const newCompany = req.body;
        const company = await companyService.create(newCompany);
        
        res.status(201).json(company);
        } catch (error) {
            next(error);
        }
    },

    getAll: async (req, res, next) => {
        try {
        const companies = await companyService.getAll();
        res.status(200).json(companies);
        } catch (error) {
            next(error);
        }
    },

    getById: async (req, res, next) => {
        try {
        const { id } = req.params;
        const company = await companyService.getById(id);
        res.status(200).json(company);
        } catch (error) {
            next(error);
        }
    },

    update: async (req, res, next) => {
        try {
        const { id } = req.params;
        const newValues = req.body;

        const company = await companyService.update(id, newValues);
        res.status(200).json(company);
        } catch (error) {
            next(error);
        }
    },

    delete: async (req, res, next) => {
        try {
        const { id } = req.params;
        const message = await companyService.delete(id);
        res.status(200).json({message});
        } catch (error) {
            next(error);
        }
    },

    addBookmark: async (req, res, next) => {
        try {
        const { id, projectId } = req.params;
        const company = await companyService.addBookmark(id, projectId);
        res.status(200).json(company);
        } catch (error) {
            next(error);
        }
    },

    removeBookmark: async (req, res, next) => {
        try {
        const { id, projectId } = req.params;
        const company = await companyService.removeBookmark(id, projectId);
        res.status(200).json(company);
        } catch (error) {
            next(error);
        }
    },
};

export default companyController;