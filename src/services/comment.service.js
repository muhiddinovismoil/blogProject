import Comments from "../models/comment.module.js";
export const getAllCommentsService = async () => {
    try {
        const comments = await Comments.findAll();
        return comments;
    } catch (error) {
        throw new Error(error.message);
    }
};
export const getCommentByIdService = async (commentId) => {
    try {
        const comment = await Comments.findByPk(commentId);
        if (!comment) {
            throw new Error("Comment not found");
        }
        return comment;
    } catch (error) {
        throw new Error(error.message);
    }
};
export const createCommentService = async (commentData) => {
    try {
        const comment = await Comments.create(commentData);
        return comment;
    } catch (error) {
        throw new Error(error.message);
    }
};
export const updateCommentService = async (commentId, commentData) => {
    try {
        const comment = await Comments.findByPk(commentId);
        if (!comment) {
            throw new Error("Comment not found");
        }
        await comment.update(commentData);
        return comment;
    } catch (error) {
        throw new Error(error.message);
    }
};
export const deleteCommentService = async (commentId) => {
    try {
        const comment = await Comments.findByPk(commentId);
        if (!comment) {
            throw new Error("Comment not found");
        }
        await comment.destroy();
        return { message: "Comment deleted successfully" };
    } catch (error) {
        throw new Error(error.message);
    }
};
