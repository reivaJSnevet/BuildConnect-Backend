import commentService from "../services/commentService.js";

const commentController = {
    createComment: async (req, res, next) => {
        try {
            const newComment = req.body;
            const comment = await commentService.createComment(newComment);
            res.status(201).json(comment);
        } catch (error) {
            next(error);
        }
    },

    getAllComments: async (req, res, next) => {
        try {
            const comments = await commentService.getAllComments();
            res.status(200).json(comments);
        } catch (error) {
            next(error);
        }
    },

    getCommentById: async (req, res, next) => {
        try {
            const { id } = req.params;
            const comment = await commentService.getCommentById(id);
            res.status(200).json(comment);
        } catch (error) {
            next(error);
        }
    },

    updateComment: async (req, res, next) => {
        try {
            const { id } = req.params;
            const updatedComment = req.body;
            const comment = await commentService.updateComment(id, updatedComment);
            res.status(200).json(comment);
        } catch (error) {
            next(error);
        }
    },

    deleteComment: async (req, res, next) => {
        try {
            const { id } = req.params;
            const result = await commentService.deleteComment(id);
            res.status(200).json({ message: result });
        } catch (error) {
            next(error);
        }
    },

    getAllByUser: async (req, res, next) => {
        try {
            const { userId } = req.params;
            const comments = await commentService.getAllByUser(userId);
            res.status(200).json(comments);
        } catch (error) {
            next(error);
        }
    },
};

export default commentController;
