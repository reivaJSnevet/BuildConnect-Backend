import { Router } from "express";
import categoryController from "../controller/categoryController.js";

const categoryRouter = Router();

categoryRouter.post("/categories", categoryController.create);
categoryRouter.get("/categories", categoryController.getAll);
categoryRouter.get("/categories/:id", categoryController.getById);
categoryRouter.put("/categories/:id", categoryController.update);
categoryRouter.delete("/categories/:id", categoryController.delete);

export default categoryRouter;