import express from "express";
import recipeRouter from "./routes/recipeRoute.js";
import mongoose from "mongoose";
import categoryRouter from "./routes/categoryRouter.js";
import expressOasGenerator from "express-oas-generator";

// connect to database
await mongoose.connect(process.env.MONGO_URL);

// create express app
const app = express();
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true,
    tags: ["categories", "recipes"],
    mongooseModels: mongoose.modelNames()
});

// apply middlewares
app.use(express.json());
app.use(express.static("uploads"));

// define routes
app.get("/", (req, res) => {
    res.json("Welcome Home");
});

app.post("/login", (req, res) => {
    res.json("Login successful");
});

app.delete("/login", (req, res) => {
    res.json("Deleted file");
});

// use routes
app.use(recipeRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect("/api-docs/"));

// listen for incoming requests
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});