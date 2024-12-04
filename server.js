import express from "express";
import sequelize from "./src/helper/db.js";
import User from "./src/models/user.module.js";
import Posts from "./src/models/post.module.js";
import Comments from "./src/models/comment.module.js";
import { boot } from "./src/configs/index.js";
import {
    authRouter,
    userRouter,
    commentsRouter,
    postsRouter,
} from "./src/routes/index.js";
const app = express();
app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postsRouter);
app.use("/api/v1/comments", commentsRouter);
app.use("/api/v1/setup", async (req, res) => {
    try {
        await sequelize.sync({ force: false });
        console.log("All tables have been created or already exist!");
        res.status(200).send({
            message: "All tables have been created or already exist!",
        });
    } catch (error) {
        console.log("Error creating tables:", error.message);
        res.status(400).send({ message: error.message });
    }
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});
app.listen(boot.port, () => {
    console.log(`Servers is running on PORT: ${boot.port}`);
});
