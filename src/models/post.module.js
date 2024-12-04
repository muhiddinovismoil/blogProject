import { DataTypes } from "sequelize";
import sequelize from "../helper/db.js";
import User from "./user.module.js";
const Posts = sequelize.define(
    "Posts",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        timestamps: true,
    }
);
Posts.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});
User.hasMany(Posts, {
    foreignKey: "user_id",
});
export default Posts;
