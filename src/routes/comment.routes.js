import { Router } from "express";
import { commentsController } from "../controllers/index.js";
export const commentsRouter = Router();
commentsRouter.get("/", commentsController);
commentsRouter.get("/", commentsController);
commentsRouter.post("/", commentsController);
commentsRouter.put("/", commentsController);
commentsRouter.delete("/", commentsController);
