import { Router } from "express";
import { addRecipes, deleteRecipe, getRecipeByID, getRecipes, updateRecipe } from "../controllers/recipeController.js";

// create a router
const recipeRouter = Router();

// define routes
recipeRouter.get("/recipes", getRecipes);

recipeRouter.post("/recipes", addRecipes);

recipeRouter.patch("/recipes/:id", updateRecipe);

recipeRouter.delete("/recipes/:id", deleteRecipe);

recipeRouter.get("/recipes/:id", getRecipeByID);

// export router
export default recipeRouter;