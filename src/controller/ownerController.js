import ownerService from '../services/ownerService.js';

const ownerController = {
    create: async (req, res, next) => {
        try {
            const body = req.body;
            const owner = await ownerService.create(body);

            res.status(201).json(owner);
        } catch (error) {
            next(error);
        }
    },

    getAll: async (req, res, next) => {
        try {
            const owners = await ownerService.getAll();
            res.status(200).json(owners);
        } catch (error) {
            next(error);
        }
    },

    getById: async (req, res, next) => {
        try {
            const { id } = req.params;
            const owner = await ownerService.getById(id);
            res.status(200).json(owner);
        } catch (error) {
            next(error);
        }
    },

    update: async (req, res, next) => {
        try {
            const { id } = req.params;
            const newValues = req.body;

            const owner = await ownerService.update(id, newValues);
            res.status(200).json(owner);
        } catch (error) {
            next(error);
        }
    },

    delete: async (req, res, next) => {
        try {
            const { id } = req.params;
            const message = await ownerService.delete(id);
            res.status(200).json({ message });
        } catch (error) {
            next(error);
        }
    },

    addRating: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { companyId, score } = req.body;
            const message = await ownerService.addRating(id, companyId, score);
            res.status(200).json(message);
        } catch (error) {
            next(error);
        }
    },

    updateRating: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { companyId, score } = req.body;
            const message = await ownerService.updateRating(id, companyId, score);
            res.status(200).json(message);
        } catch (error) {
            next(error);
        }
    },

    addPermission: async (req, res, next) => {
        try {
            const { id, companyId } = req.params;
            const message = await ownerService.addPermission(id, companyId);
            res.status(200).json(message);
        } catch (error) {
            next(error);
        }
    },

    removePermission: async (req, res, next) => {
        try {
            const { id, companyId } = req.params;
            const message = await ownerService.removePermission(id, companyId);
            res.status(200).json(message);
        } catch (error) {
            next(error);
        }
    },

    getPermissions: async (req, res, next) => {
        try {
            const { id } = req.params;
            const permissions = await ownerService.getPermissions(id);
            res.status(200).json(permissions);
        } catch (error) {
            next(error);
        }
    },
};

export default ownerController;
