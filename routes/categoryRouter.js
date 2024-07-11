import { Router } from "express";
import { getCategories, postCategory } from "../controllers/categoryController.js";
import { remoteUpload } from "../middleware/uploads.js";
import { checkUserSession } from "../middleware/auth.js";



const categoryRouter = Router();

categoryRouter.get("/categories", getCategories);

categoryRouter.post("/categories", checkUserSession, remoteUpload.single("image"), postCategory);


export default categoryRouter;