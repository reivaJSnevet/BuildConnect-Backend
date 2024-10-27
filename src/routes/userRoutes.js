import { Router } from "express";
import userController from "../controller/userController.js";

const userRouter = Router();

userRouter.post("/users", userController.create);
userRouter.get("/users", userController.getAll);
userRouter.get("/users/:id", userController.getById);
userRouter.put("/users/:id", userController.update);
userRouter.delete("/users/:id", userController.delete);

export default userRouter;
