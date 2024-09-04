import projectService from "../services/projectService.js";

const projectController = {
    create: async (req, res) => {
        try {
        const newProject = req.body;
        const project = await projectService.create(newProject);
        res.status(201).json(project);
        } catch (error) {
        res.status(400).json({ error: error.message });
        }
    },
    
    getAll: async (req, res) => {
        try {
        const projects = await projectService.getAll();
        res.status(200).json(projects);
        } catch (error) {
        res.status(400).json({ error: error.message });
        }
    },
    
    getById: async (req, res) => {
        try {
        const { id } = req.params;
        const project = await projectService.getById(id);
        res.status(200).json(project);
        } catch (error) {
        res.status(400).json({ error: error.message });
        }
    },
    
    update: async (req, res) => {
        try {
        const { id } = req.params;
        const updatedProject = req.body;
        const project = await projectService.update(id, updatedProject);
        res.status(200).json(project);
        } catch (error) {
        res.status(400).json({ error: error.message });
        }
    },
    
    delete: async (req, res) => {
        try {
        const { id } = req.params;
        const project = await projectService.delete(id);
        res.status(200).json(project);
        } catch (error) {
        res.status(400).json({ error: error.message });
        }
    },
    };

    export default projectController;