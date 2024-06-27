import { RecipeModel } from "../modules/recipeModule.js";


// get
export const getRecipes = async (req, res, next) => {
    try {
        // get all recipes from database
        const allRecipes = await RecipeModel.find();
        // return all recipes as response
        res.json(allRecipes);
    } catch (error) {
        next(error);
    }
};

export const getRecipeByID = (req, res) => {
    res.json(`New recipe with id:${req.params.id} received`);
}

// add
export const addRecipes = async (req, res, next) => {
    try {
        // add recipe to database
        const newRecipe = await RecipeModel.create(req.body);
        // return response
        res.json(newRecipe);
    } catch (error) {
        next(error);
    }
};

// patch
export const updateRecipe = (req, res) => {
    res.json(`Recipe with ID ${req.params.id} Updated `);
};

// delete 
export const deleteRecipe = async (req, res, next) => {
    try {
        // delete recipe by id
        const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
        res.json(deleteRecipe);
    } catch (error) {
        next(error);
    }
};