import express from "express";
import Movie from "../models/Movie.js";

const movieRouter = express.Router();

movieRouter.get("/movies", async (req, res) => {
    console.log("get 10 movies");
    await Movie.find({}).limit(10).then((response) => {
        console.log("movies", response);
        res.status(200).send(response);
    })
});

movieRouter.post("/movies", async (req, res) => {
    console.log("post request");
});
movieRouter.patch("/movies", async (req, res) => {
    console.log("post request");
});
movieRouter.delete("/movies", async (req, res) => {
    console.log("post request");
});

export default movieRouter;