import { Router } from "express";
import authController from "../controller/authController.js";

const authRouter = Router();

authRouter.post("/login", authController.login);
authRouter.post("/logout", authController.logout);
authRouter.post("/refreshToken", authController.handleRefreshToken);
authRouter.get("/verify-email/:token", authController.confirmEmail);
authRouter.post("/forgot-password", authController.forgotPassword);
authRouter.post("/reset-password/:token", authController.resetPassword);
authRouter.post("/register/owners", authController.registerOwner);
authRouter.post("/register/companies", authController.registerCompany);

export default authRouter;