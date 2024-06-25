import { Router } from "express";

// create a router
const recipeRouter = Router();

// define routes
recipeRouter.get("/recipes", (req, res) => {
    res.json("All Recipes");
});

recipeRouter.post("/recipes", (req, res) => {
    res.json("Add your recipe");
});

recipeRouter.patch("/recipes/:id", (req, res) => {
    res.json(`Recipe with ID ${req.params.id} Updated `);
});

recipeRouter.delete("/recipes/:id", (req, res) => {
    res.json(`Recipe with ID ${req.params.id} deleted`);
});

// export router
export default recipeRouter;