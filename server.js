import express from "express";
import { boot } from "./src/configs/index.js";
const app = express();
app.use(express.json());
// app.use("/auth");
// app.use("/users");
// app.use("/posts");
// app.use("/comments");
app.listen(boot.port, () => {
    console.log(`Servers is running on PORT: ${boot.port}`);
});
