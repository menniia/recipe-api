import { RecipeModel } from "../models/recipeModule.js";

// get
export const getRecipes = async (req, res, next) => {
  try {
    // get query params
    const { limit, skip, filter, fields } = req.query;
    // get all recipes from database
    const allRecipes = await RecipeModel.find(JSON.parse(filter))
      .select(JSON.parse(fields))
      .limit(limit)
      .skip(skip);
    // return all recipes as response
    res.status(200).json(allRecipes);
  } catch (error) {
    next(error);
  }
}

export const getRecipeByID = async (req, res) => {
  try {
    const getSingleRecipe = await RecipeModel.findById(req.params.id);
    res.json(getSingleRecipe);
  } catch (error) {
    next(error);
  }
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
}

// patch
export const updateRecipe = async (req, res) => {
  try {
    // update recipe by id
    const updatedRecipe = await RecipeModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    // return response
    res.json(updatedRecipe);
  } catch (error) {
    next(error);
  }
}

// delete
export const deleteRecipe = async (req, res, next) => {
  try {
    // delete recipe by id
    const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
    res.json(deleteRecipe);
  } catch (error) {
    next(error);
  }
}
