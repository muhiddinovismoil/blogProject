import User from "../models/user.module.js";
export const registerUserService = async (userData) => {
    try {
        let user = await User.findOne({ where: { email: userData.email } });
        if (!user) {
            user = await User.create(userData);
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};
export const loginUserService = async (email) => {
    try {
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};
