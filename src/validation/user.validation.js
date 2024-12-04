import Joi from "joi";
export const userScheme = Joi.object({
    email: Joi.string().email().min(5).required(),
    first_name: Joi.string().min(5).required(),
    last_name: Joi.string().min(5).required(),
});
export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
});
