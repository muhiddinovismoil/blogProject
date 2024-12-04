import Joi from "joi";
export const commentScheme = Joi.object({
    user_id: Joi.number().required(),
    content: Joi.string().min(5).required(),
    post_id: Joi.number().required(),
});
