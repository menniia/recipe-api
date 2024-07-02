import { categoryModel } from "../models/recipeCategory.js";

export const getCategories = async (req, res, next) => {
    try {
        // get all categories from the database
        const allCategories = await categoryModel.find();
        res.json(allCategories);
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
        })
        res.status(201).json(addCategory);
    } catch (error) {
        next(error);
    }
}