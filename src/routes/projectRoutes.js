import { Router } from "express";
import projectController from "../controller/projectController.js";

const projectRouter = Router();

projectRouter.post("/projects", projectController.create);
projectRouter.get("/projects", projectController.getAll);
projectRouter.get("/projects/:id", projectController.getById);
projectRouter.put("/projects/:id", projectController.update);
projectRouter.delete("/projects/:id", projectController.delete);

export default projectRouter;