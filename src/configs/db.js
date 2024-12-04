import { config } from "dotenv";

config();
export const database = {
    uri: process.env.DATABASE_URL,
};
