import { Router } from "express";
import companyController from "../controller/companyController.js";

const companyRouter = Router();

companyRouter.post("/companies", companyController.create);
companyRouter.get("/companies", companyController.getAll);
companyRouter.get("/companies/:id", companyController.getById);
companyRouter.put("/companies/:id", companyController.update);
companyRouter.delete("/companies/:id", companyController.delete);

companyRouter.post("/companies/:id/projects/:projectId", companyController.addBookmark);
companyRouter.delete("/companies/:id/projects/:projectId", companyController.removeBookmark);


export default companyRouter;