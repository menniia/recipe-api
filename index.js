import express from "express";
import recipeRouter from "./routes/recipeRoute.js";
import mongoose from "mongoose";
import categoryRouter from "./routes/categoryRouter.js";
import expressOasGenerator from "express-oas-generator";
import userRouter from "./routes/userRoute.js";
import session from "express-session";
import MongoStore from "connect-mongo";


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
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
    cookie: { secure: true }
}))

// use routes
app.use(userRouter);
app.use(recipeRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect("/api-docs/"));

// listen for incoming requests
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});