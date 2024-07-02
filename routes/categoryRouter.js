import { Router } from "express";
import multer from "multer";
import { getCategories, postCategory } from "../controllers/categoryController.js";

// create upload middleware
const upload = multer({ dest: "uploads/" });

const categoryRouter = Router();

categoryRouter.get("/categories", getCategories);

categoryRouter.post("/categories", upload.single("image"), postCategory);


export default categoryRouter;