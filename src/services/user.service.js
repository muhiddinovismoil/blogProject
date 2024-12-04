import User from "../models/user.module.js";
export const getAllUsersService = async () => {
    try {
        const users = User.findAll();
        return users;
    } catch (error) {
        throw new Error(error.message);
    }
};
export const getUserByIdService = async (userId) => {
    try {
        const user = User.findByPk(userId);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};
export const updateUserService = async (userId, updatedData) => {
    try {
        const user = await User.findOne({ where: { id: userId } });

        if (!user) {
            throw new Error("User not found");
        }
        await user.update(updatedData);
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};
export const deleteUserService = async (userId) => {
    try {
        const user = await User.findByPk(userId);

        if (!user) {
            throw new Error("User not found");
        }

        await user.destroy();
        return { message: "User deleted successfully" };
    } catch (error) {
        throw new Error(error.message);
    }
};
