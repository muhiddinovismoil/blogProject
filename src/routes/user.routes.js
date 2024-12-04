import { Router } from "express";
import { usersController } from "../controllers/index.js";
import { validateRequest } from "../middlewares/validate.js";
export const userRouter = Router();
userRouter.get("/", usersController.getAll);
userRouter.get("/:id", usersController.getById);
userRouter.put("/:id", usersController.updateUser);
userRouter.delete("/:id", usersController.deleteUser);
