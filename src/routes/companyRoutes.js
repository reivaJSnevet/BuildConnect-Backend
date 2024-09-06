import { Router } from "express";
import companyController from "../controller/companyController.js";

const companyRouter = Router();

companyRouter.post("/companies", companyController.create);
companyRouter.get("/companies", companyController.getAll);
companyRouter.get("/companies/:id", companyController.getById);
companyRouter.put("/companies/:id", companyController.update);
companyRouter.delete("/companies/:id", companyController.delete);
companyRouter.post("/companies/:companyId/projects/:projectId", companyController.addBookmark);
companyRouter.delete("/companies/:companyId/projects/:projectId", companyController.removeBookmark);


export default companyRouter;