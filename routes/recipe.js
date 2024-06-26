import { Router } from "express";
import { RecipeModel } from "../modules/recipe.js";

// create a router
const recipeRouter = Router();

// define routes
recipeRouter.get("/recipes", (req, res) => {
    res.json("All Recipes");
});

recipeRouter.post("/recipes", async (req, res) => {
    // add recipe to database
    await RecipeModel.create(req.body);
    // return response
    res.json("Recipe Added");
});

recipeRouter.patch("/recipes/:id", (req, res) => {
    res.json(`Recipe with ID ${req.params.id} Updated `);
});

recipeRouter.delete("/recipes/:id", (req, res) => {
    res.json(`Recipe with ID ${req.params.id} deleted`);
});

recipeRouter.get("/recipes/:id", (req, res) => {
    res.json(`New recipe with id:${req.params.id} received`)
});

// export router
export default recipeRouter;