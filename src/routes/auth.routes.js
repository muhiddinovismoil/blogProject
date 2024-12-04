import { Router } from "express";
import { authController } from "../controllers/index.js";
export const authRouter = Router();
authRouter.post("/signup");
authRouter.post("/signin");
