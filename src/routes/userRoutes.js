import { Router } from 'express';
import userController from '../controller/userController.js';

const userRouter = Router();

userRouter.post('/users', userController.create);

export default userRouter;