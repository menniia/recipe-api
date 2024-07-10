import { Router } from "express";
import { register } from "../controllers/usersController.js";

const userRouter = Router();


// define routes
userRouter.post("/register", register);


export default userRouter;