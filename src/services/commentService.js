import { Comment, User } from "../models/index.js";

const commentService = {
    createComment: async (newComment) => {
        try {
        //logica permiso
            const comment = await Comment.create(newComment);
            return comment;
        } catch (error) {
            throw error;
        }
    },

    getAllComments: async () => {
        try {
            const comments = await Comment.findAll();
            return comments;
        } catch (error) {
            throw error;
        }
    },

    getCommentById: async (id) => {
        try {
            const comment = await Comment.findByPk(id);
            if (!comment) {
                throw new NotFoundError("Comment", id);
             }
            return comment;
        } catch (error) {
            throw error;
        }
    },

    updateComment: async (id, updatedComment) => {
        try {
            const comment = await Comment.findByPk(id);
            if (!comment) {
                throw new NotFoundError("Comment", id);
            }
            const updated = await comment.update(updatedComment);
            return updated;
        } catch (error) {
            throw error;
        }
    },

    deleteComment: async (id) => {
        try {
            const comment = await Comment.findByPk(id);
            if (!comment) {
                throw new NotFoundError("Comment", id);
            }
            await comment.destroy();
            return `Comment: ${id} deleted`;
        } catch (error) {
            throw error;
        }
    },

    getAllByUser: async (userId) => {
        try {
            const comments = await Comment.findAll({
                where: { userId },
            });
            return comments;
        } catch (error) {
            throw error;
        }
    },
};

export default commentService;
