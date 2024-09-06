import commentService from "../services/commentService.js";

const commentController = {
    createComment: async (req, res) => {
        try {
            const newComment = req.body;
            const comment = await commentService.createComment(newComment);
            res.status(201).json(comment);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getAllComments: async (req, res) => {
        try {
            const comments = await commentService.getAllComments();
            res.status(200).json(comments);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getCommentById: async (req, res) => {
        try {
            const { id } = req.params;
            const comment = await commentService.getCommentById(id);
            res.status(200).json(comment);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    updateComment: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedComment = req.body;
            const comment = await commentService.updateComment(id, updatedComment);
            res.status(200).json(comment);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    deleteComment: async (req, res) => {
        try {
            const { id } = req.params;
            const result = await commentService.deleteComment(id);
            res.status(200).json({ message: result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getAllByUser: async (req, res) => {
        try {
            const { userId } = req.params;
            const comments = await commentService.getAllByUser(userId);
            res.status(200).json(comments);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
};

export default commentController;
