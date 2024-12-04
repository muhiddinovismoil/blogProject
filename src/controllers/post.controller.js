import {
    getAllPostsService,
    getPostByIdService,
    createPostService,
    updatePostService,
    deletePostService,
} from "../services/index.js";
export const postsController = {
    getAll: async function (req, res, next) {
        try {
            const getPosts = await getAllPostsService();
            res.status(200).send({
                message: "Ok",
                posts: getPosts,
            });
        } catch (error) {
            next(error);
        }
    },
    getById: async function (req, res, next) {
        try {
            const getPost = await getPostByIdService(req.params.id);
            res.status(200).send({
                message: "Ok",
                post: getPost,
            });
        } catch (error) {
            next(error);
        }
    },
    addPost: async function (req, res, next) {
        try {
            const newPost = await createPostService(req.body);
            res.status(200).send({
                message: "Create",
                newPost: newPost,
            });
        } catch (error) {
            next(error);
        }
    },
    updatePost: async function (req, res, next) {
        try {
            const updatePost = await updatePostService(req.params.id, req.body);
            res.status(200).send({
                message: "Updated",
                updatePost: updatePost,
            });
        } catch (error) {
            next(error);
        }
    },
    deletePost: async function (req, res, next) {
        try {
            const deletedPost = await deletePostService(req.params.id);
            res.status(200).send({
                message: "Deleted",
                deletedPost: deletedPost,
            });
        } catch (error) {
            next(error);
        }
    },
};
