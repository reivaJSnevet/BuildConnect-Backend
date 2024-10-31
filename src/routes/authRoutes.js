import { Router } from "express";
import authController from "../controller/authController.js";

const authRouter = Router();

authRouter.post("/login", authController.login);
authRouter.get("/logout", authController.logout);
authRouter.get("/refresh-token", authController.handleRefreshToken);
authRouter.get("/verify-email/:token", authController.confirmEmail);
authRouter.post("/forgot-password", authController.forgotPassword);
authRouter.post("/reset-password/:token", authController.resetPassword);
authRouter.post("/register/owners", authController.registerOwner);
authRouter.post("/register/companies", authController.registerCompany);

export default authRouter;