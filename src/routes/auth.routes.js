import { Router } from "express";
import { authController } from "../controllers/index.js";
import { validateRequest } from "../middlewares/validate.js";
import { loginSchema, userScheme } from "../validation/index.js";
export const authRouter = Router();
authRouter.post(
    "/signup",
    validateRequest(userScheme),
    authController.register
);
authRouter.post("/signin", validateRequest(loginSchema), authController.login);
