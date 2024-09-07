import { Router } from 'express';
import commentController from '../controller/commentController.js';

const commentRouter = Router();

commentRouter.get('/comments', commentController.getAllComments);
commentRouter.post('/comments', commentController.createComment);
commentRouter.get('/comments/:id', commentController.getCommentById);
commentRouter.put('/comments/:id', commentController.updateComment);
commentRouter.delete('/comments/:id', commentController.deleteComment);
commentRouter.get('/comments/user/:userId', commentController.getAllByUser);

export default commentRouter;


