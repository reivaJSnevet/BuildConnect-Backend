import { Router } from "express";
import userController from "../controller/userController.js";

const userRouter = Router();

userRouter.post("/users", userController.create);
userRouter.get("/users", userController.getAll);
userRouter.get("/users/:id", userController.getById);
userRouter.put("/users/:id", userController.update);
userRouter.delete("/users/:id", userController.delete);

userRouter.post("/users/:userId/companies/:companyId", userController.addPermission);
userRouter.delete("/users/:userId/companies/:companyId", userController.removePermission);

userRouter.post("/users/:userId/ratings", userController.addRating);
userRouter.put("/users/:userId/ratings/:ratingId", userController.updateRating);

export default userRouter;
