import {
    getAllUsersService,
    getUserByIdService,
    updateUserService,
    deleteUserService,
} from "../services/index.js";
export const usersController = {
    getAll: async function (req, res, next) {
        try {
            const users = await getAllUsersService();
            res.status(200).send({
                message: "Ok",
                users: users,
            });
        } catch (error) {
            next(error);
        }
    },
    getById: async function (req, res, next) {
        try {
            const user = await getUserByIdService(req.params.id);
            res.status(200).send({
                message: "Ok",
                users: user,
            });
        } catch (error) {
            next(error);
        }
    },
    updateUser: async function (req, res, next) {
        try {
            const updateUser = await updateUserService(req.params.id, req.body);
            res.status(200).send({
                message: "Ok",
                updateUser: updateUser,
            });
        } catch (error) {
            next(error);
        }
    },
    deleteUser: async function (req, res, next) {
        try {
            const deleted = await deleteUserService(req.params.id);
            res.status(200).send({
                message: `Deleted`,
                deleted: deleted,
            });
        } catch (error) {
            next(error);
        }
    },
};
