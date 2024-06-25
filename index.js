import express from "express";
import recipeRouter from "./routes/recipes.js";

// create express app
const app = express();

// define routes
app.get("/", (req, res) => {
    res.json("Welcome Home");
});

app.post("/login", (req, res) => {
    res.json("Login successful");
});

app.delete("/trash", (req, res) => {
    res.json("Deleted file");
});

// use routes
app.use(recipeRouter);

// listen for incoming requests
app.listen(3000, () => {
    console.log("app listening on port 3000");
});