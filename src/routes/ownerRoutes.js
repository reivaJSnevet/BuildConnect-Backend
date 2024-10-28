import { Router } from "express";
import ownerController from "../controller/ownerController.js";

const ownerRouter = Router();

ownerRouter.post("/owners", ownerController.create);
ownerRouter.get("/owners", ownerController.getAll);
ownerRouter.get("/owners/:id", ownerController.getById);
ownerRouter.put("/owners/:id", ownerController.update);
ownerRouter.delete("/owners/:id", ownerController.delete);

ownerRouter.post("/owners/:id/Rating", ownerController.addRating);
ownerRouter.put("/owners/:id/Rating", ownerController.updateRating);

export default ownerRouter;