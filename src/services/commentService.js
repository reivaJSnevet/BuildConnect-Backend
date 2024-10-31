import { Comment, User, Owner, Company } from "../models/index.js";
import { NotFoundError, ValidationError } from "../errors/index.js";

const commentService = {
    createComment: async (newComment) => {
        try {
            const user = await User.findByPk(newComment.userId, {
                include: Owner,
            });
            if (!user || !user.Owner) {
                throw new NotFoundError("User", newComment.userId);
            }

            const company = await User.findByPk(newComment.companyId, {
                include: Company,
            });
            if (!company || !company.Company) {
                throw new NotFoundError("Company", newComment.CompanyLegalId);
            }

            user.Owner.hasPermission(company.Company.legalId);
            if (!user.Owner.hasPermission(company.Company.legalId)) {
                throw new ValidationError("User does not have permission to comment this company", "companyId");
            }

            const comment = await Comment.create({
                OwnerId: user.Owner.id,
                CompanyLegalId: company.Company.legalId,
                text: newComment.text,
            });
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
