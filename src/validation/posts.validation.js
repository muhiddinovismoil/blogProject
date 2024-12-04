import Joi from "joi";
export const postsScheme = Joi.object({
    user_id: Joi.number().required(),
    title: Joi.string().min(5).required(),
    content: Joi.string().min(5).required(),
    slug: Joi.string().min(5).required(),
});
