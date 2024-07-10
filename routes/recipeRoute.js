import { Router } from "express";
import { addRecipes, deleteRecipe, getRecipeByID, getRecipes, updateRecipe } from "../controllers/recipeController.js";
import { remoteUpload } from "../middleware/uploads.js";
import { checkUserSession } from "../middleware/auth.js";


// create a router
const recipeRouter = Router();


// define routes
recipeRouter.get("/recipes", getRecipes);

recipeRouter.post("/recipes", checkUserSession, remoteUpload.single("image"), addRecipes);  // applied middleware in the post

recipeRouter.patch("/recipes/:id", checkUserSession, updateRecipe);

recipeRouter.delete("/recipes/:id", checkUserSession, deleteRecipe);

recipeRouter.get("/recipes/:id", getRecipeByID);

// export router
export default recipeRouter;