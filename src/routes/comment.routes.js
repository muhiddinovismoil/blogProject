import { Router } from "express";
import { commentsController } from "../controllers/index.js";
import { validateRequest } from "../middlewares/validate.js";
export const commentsRouter = Router();
commentsRouter.get("/", commentsController.getAll);
commentsRouter.get("/:id", commentsController.getById);
commentsRouter.post("/", commentsController.addComment);
commentsRouter.put("/:id", commentsController.updateComment);
commentsRouter.delete("/:id", commentsController.deleteComment);
