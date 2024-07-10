import { categoryModel } from "../models/recipeCategory.js";


export const getCategories = async (req, res, next) => {
    try {
        // Get query params
        const { limit, skip, filter, fields } = req.query;
        // Get all categories from database
        const allCategories = await CategoryModel
            .find(JSON.parse(filter))
            .select(JSON.parse(fields))
            .limit(limit)
            .skip(skip);
        // Return response
        res.status(200).json(allCategories);
    } catch (error) {
        next(error);
    }
}


export const postCategory = async (req, res, next) => {
  try {
    // add category to database
    const addCategory = await categoryModel.create({
      ...req.body,
      image: req.file.filename
    });
    res.status(201).json(addCategory);
  } catch (error) {
    next(error);
  }
};
