import { Router } from "express";
import { usersController } from "../controllers/index.js";
export const userRouter = Router();
userRouter.get("/", usersController);
userRouter.get("/:id", usersController);
userRouter.put("/:id", usersController);
userRouter.delete("/:id", usersController);
