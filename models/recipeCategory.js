import mongoose, { Schema, model } from "mongoose";
import normalize from "normalize-mongoose";

const categorySchema = new Schema({
    name: {type: String, unique: true, required: true},
    image: {type: String, required: true}
}, {
    timestamps: true
});

categorySchema.plugin(normalize);

export const categoryModel = model("Category", categorySchema);