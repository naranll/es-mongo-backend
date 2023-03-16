import mongoose from "mongoose";
import "../config/mongodb-config.js";

const MovieSchema = new mongoose.Schema(
    {
        title: String,
        year: Number,
        genres: [String],
    },
    {
        collection: "movies",
    }
);

const Movie = mongoose.model("Movie", MovieSchema, "movies");

export default Movie;