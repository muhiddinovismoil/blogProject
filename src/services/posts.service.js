import Posts from "../models/post.module.js";
export const getAllPostsService = async () => {
    try {
        const posts = await Posts.findAll();
        return posts;
    } catch (error) {
        throw new Error(error.message);
    }
};
export const getPostByIdService = async (postId) => {
    try {
        const post = await Posts.findByPk(postId);
        if (!post) {
            throw new Error("Post not found");
        }
        return post;
    } catch (error) {
        throw new Error(error.message);
    }
};
export const createPostService = async (postData) => {
    try {
        const post = await Posts.create(postData);
        return post;
    } catch (error) {
        throw new Error(error.message);
    }
};
export const updatePostService = async (postId, postData) => {
    try {
        const post = await Posts.findByPk(postId);
        if (!post) {
            throw new Error("Post not found");
        }
        await post.update(postData);
        return post;
    } catch (error) {
        throw new Error(error.message);
    }
};
export const deletePostService = async (postId) => {
    try {
        const post = await Posts.findByPk(postId);
        if (!post) {
            throw new Error("Post not found");
        }
        await post.destroy();
        return { message: "Post deleted successfully" };
    } catch (error) {
        throw new Error(error.message);
    }
};
