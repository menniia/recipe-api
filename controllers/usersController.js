import bcrypt from "bcrypt";
import { UserModel } from "../models/userModel.js";


export const register = async (req, res, next) => {
    try {
        // hash user password
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);
        // create a new user
        const user = await UserModel.create({
            ...req.body,
            password: hashedPassword
        });

        // generate session for the user
        req.session.user = {
            id: user.id
        }

        // return response
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next) => {
    try {
        const { email, password, userName, phone } = req.body;
        // find user using a unique identifier (either phone, email or name)
        const user = await UserModel.findOne({
            $or: [
                { email, userName, phone }
            ]
        });

        if (!user) {
            return res.status(401).json("No user found");
        }

        // verify user password
        const correctPassword = bcrypt.compareSync(password, user.password);
        if (!correctPassword) {
            return res.status(401).json("Invalid credentials");
        }

        // generate session for the user
        req.session.user = {
            id: user.id
        }

        // resturn response
        return res.status(200).json("Login successful");
    } catch (error) {
        next(error);
    }
}

export const logout = async (req, res, next) => {
    try {
        // destroy session
        await req.session.destroy()

        // return response
        res.status(200).json("Logout successful");
    } catch (error) {
        next(error);
    }
}

export const profile = async (req, res, next) => {
    try {
        // find user by id
        const user = await UserModel
            .findById(req.session.user.id)
            .select({ password: false });

        // return response
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}