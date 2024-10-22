import { Router } from "express";
import authController from "../controller/authController.js";

const authRouter = Router();

authRouter.post("/login", authController.login);
authRouter.post("/register-user", authController.registerUser);
authRouter.post("/register-company", authController.registerCompany);
authRouter.get("/verify-email/:token", authController.verifyEmail);
authRouter.get("/refresh-token", authController.refreshToken);
authRouter.get("/logout", authController.logout);

export default authRouter;