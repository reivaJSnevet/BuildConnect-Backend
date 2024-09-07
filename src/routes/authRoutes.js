import { Router } from "express";
import authController from "../controller/authController.js";

const authRouter = Router();

authRouter.post("/login", authController.login);
authRouter.post("/register", authController.registerUser);
authRouter.post("/register-company", authController.registerCompany);
authRouter.get("/verify-email/:token", authController.verifyEmail);

export default authRouter;