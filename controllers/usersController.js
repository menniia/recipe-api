import bcrypt from "bcrypt";
import { UserModel } from "../models/userModel.js";


export const register = async (req, res, next) => {
    try {
        // hash user password
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);
        // create a new user
        await UserModel.create({
            ...req.body,
            password: hashedPassword
        });
        // return response
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next) => {

}

export const logout = async (req, res, next) => {

}

export const profile = async (req, res, next) => {

}