import { registerUserService, loginUserService } from "../services/index.js";
export const authController = {
    register: async function (req, res, next) {
        try {
            const user = await registerUserService(req.body);
            res.status(201).json({
                message: "User registered successfully",
                user: {
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                },
            });
        } catch (error) {
            next(error);
        }
    },
    login: async function (req, res, next) {
        try {
            const { email } = req.body;
            const user = await loginUserService(email);
            res.status(200).json({
                message: "User logged in successfully",
                user: {
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                },
            });
        } catch (error) {
            next(error);
        }
    },
};
