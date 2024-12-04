import { DataTypes } from "sequelize";
import sequelize from "../helper/db.js";
import User from "./user.module.js";
import Posts from "./post.module.js";
const Comments = sequelize.define(
    "Comments",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);
Comments.belongsTo(Posts, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
});
Posts.hasMany(Comments, {
    foreignKey: "post_id",
});
Comments.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});
User.hasMany(Comments, {
    foreignKey: "user_id",
});
export default Comments;
