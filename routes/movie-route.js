import express from "express";
import Movie from "../models/Movie.js";

const movieRouter = express.Router();

movieRouter.get("/movies", async (req, res) => {
    console.log("get 10 movies");
    // const movies = await Movie.find({}).limit(1);
    // console.log("movies", movies);
    // res.status(200).send("Getting movies");
    await Movie.find({}).limit(10).then((response) => console.log(response))
})

export default movieRouter;