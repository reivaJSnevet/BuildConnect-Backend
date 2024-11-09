import { Router } from 'express';
import verifyPlan from '../middlewares/verifyPlan.js';
import projectController from '../controller/projectController.js';

const projectRouter = Router();

projectRouter.post('/projects', projectController.create);
projectRouter.get('/projects', verifyPlan, projectController.getAll);
projectRouter.get('/projects/:id', projectController.getById);
projectRouter.put('/projects/:id', projectController.update);
projectRouter.delete('/projects/:id', projectController.delete);

projectRouter.post('/projects/:id/categories/:categoryId', projectController.addCategory);
projectRouter.delete('/projects/:id/categories/:categoryId', projectController.removeCategory);

projectRouter.post('/projects/:id/types/:typeId', projectController.addType);
projectRouter.delete('/projects/:id/types/:typeId', projectController.removeType);

export default projectRouter;
