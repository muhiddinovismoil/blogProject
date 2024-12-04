import { Router } from "express";
import { postsController } from "../controllers/index.js";
import { validateRequest } from "../middlewares/validate.js";
export const postsRouter = Router();
postsRouter.get("/", postsController.getAll);
postsRouter.get("/:id", postsController.getById);
postsRouter.post("/", postsController.addPost);
postsRouter.put("/:id", postsController.updatePost);
postsRouter.delete("/:id", postsController.deletePost);
