import { Router } from "express";
import { postsController } from "../controllers/index.js";
export const postsRouter = Router();
postsRouter.get("/", postsController);
postsRouter.get("/:id", postsController);
postsRouter.post("/", postsController);
postsRouter.put("/:id", postsController);
postsRouter.delete("/:id", postsController);
