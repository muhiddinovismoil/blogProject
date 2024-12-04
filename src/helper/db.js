import { Sequelize } from "sequelize";
import { database } from "../configs/index.js";
const sequelize = new Sequelize(database.uri, {
    dialect: "postgres",
    protocol: "postgres",
    logging: false,
});
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connection established successfully!");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
testConnection();
export default sequelize;
