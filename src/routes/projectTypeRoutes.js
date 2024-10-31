import { Router } from "express";
import projectTypeController from '../controller/projectTypeController.js';

const projectTypeRouter = Router();

projectTypeRouter.post("/project-type", projectTypeController.create);
projectTypeRouter.get("/project-type", projectTypeController.getAll);
projectTypeRouter.get("/project-type/:id", projectTypeController.getById);
projectTypeRouter.put("/project-type/:id", projectTypeController.update);
projectTypeRouter.delete("/project-type/:id", projectTypeController.delete);

export default projectTypeRouter;