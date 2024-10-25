import { Router } from "express";
import { handleContactForm } from "../utils/emails/contactEmail.js"; 

const contactRouter = Router();

contactRouter.post("/contact", handleContactForm);

export default contactRouter;


