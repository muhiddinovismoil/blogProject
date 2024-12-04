import {
    getAllCommentsService,
    getCommentByIdService,
    createCommentService,
    updateCommentService,
    deleteCommentService,
} from "../services/index.js";
export const commentsController = {
    getAll: async function (req, res, next) {
        try {
            const comments = await getAllCommentsService();
            res.status(200).send({
                message: "OK",
                comments: comments,
            });
        } catch (error) {
            next(error);
        }
    },
    getById: async function (req, res, next) {
        try {
            const comment = await getCommentByIdService(req.params.id);
            res.status(200).send({
                message: "Ok",
                comment: comment,
            });
        } catch (error) {
            next(error);
        }
    },
    addComment: async function (req, res, next) {
        try {
            const newComment = await createCommentService(req.body);
            res.status(201).send({
                message: "Created",
                newComment: newComment,
            });
        } catch (error) {
            next(error);
        }
    },
    updateComment: async function (req, res, next) {
        try {
            const updatedComment = await updateCommentService(
                req.params.id,
                req.body
            );
            res.status(200).send({
                message: "Updated",
                updatedComment: updatedComment,
            });
        } catch (error) {
            next(error);
        }
    },
    deleteComment: async function (req, res, next) {
        try {
            const deletedComment = await deleteCommentService(req.params.id);
            res.status(200).send({
                message: "Deleted",
                deletedComment: deletedComment,
            });
        } catch (error) {
            next(error);
        }
    },
};
