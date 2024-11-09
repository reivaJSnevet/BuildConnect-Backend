import { Router } from 'express';
import ownerController from '../controller/ownerController.js';

const ownerRouter = Router();

ownerRouter.post('/owners', ownerController.create);
ownerRouter.get('/owners', ownerController.getAll);
ownerRouter.get('/owners/:id', ownerController.getById);
ownerRouter.put('/owners/:id', ownerController.update);
ownerRouter.delete('/owners/:id', ownerController.delete);

ownerRouter.get('/owners/:id/Rating', ownerController.getRatings);
ownerRouter.post('/owners/:id/Rating', ownerController.addRating);
ownerRouter.put('/owners/:id/Rating', ownerController.updateRating);

ownerRouter.post("/owners/:id/permission/companies/:companyId", ownerController.addPermission);
ownerRouter.delete("/owners/:id/permission/companies/:companyId", ownerController.removePermission);
ownerRouter.get("/owners/:id/permission/companies", ownerController.getPermissions);

export default ownerRouter;
