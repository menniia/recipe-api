import express from "express";
import recipeRouter from "./routes/recipeRoute.js";
import mongoose from "mongoose";

// connect to database
await mongoose.connect(process.env.MONGO_URL);

// create express app
const app = express();

// apply middlewares
app.use(express.json());

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
const port = 8000
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});