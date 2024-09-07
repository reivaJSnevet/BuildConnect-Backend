import companyService from "../services/companyService.js";

const companyController = {
    create: async (req, res) => {
        try {
        const newCompany = req.body;
        const company = await companyService.create(newCompany);
        res.status(201).json(company);
        } catch (error) {
        res.status(400).json({ error: error.message });
        }
    },

    getAll: async (req, res) => {
        try {
        const companies = await companyService.getAll();
        res.status(200).json(companies);
        } catch (error) {
        res.status(400).json({ error: error.message });
        }
    },

    getById: async (req, res) => {
        try {
        const { id } = req.params;
        const company = await companyService.getById(id);
        res.status(200).json(company);
        } catch (error) {
        res.status(400).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        try {
        const { id } = req.params;
        const updatedCompany = req.body;
        const company = await companyService.update(id, updatedCompany);
        res.status(200).json(company);
        } catch (error) {
        res.status(400).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
        const { id } = req.params;
        const company = await companyService.delete(id);
        res.status(200).json(company);
        } catch (error) {
        res.status(400).json({ error: error.message });
        }
    },

    addBookmark: async (req, res) => {
        try {
        const { companyId, projectId } = req.params;
        const company = await companyService.addBookmark(companyId, projectId);
        res.status(200).json(company);
        } catch (error) {
        res.status(400).json({ error: error.message });
        }
    },

    removeBookmark: async (req, res) => {
        try {
        const { companyId, projectId } = req.params;
        const company = await companyService.removeBookmark(companyId, projectId);
        res.status(200).json(company);
        } catch (error) {
        res.status(400).json({ error: error.message });
        }
    },
};

export default companyController;