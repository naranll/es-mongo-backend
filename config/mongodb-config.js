import mongoose from "mongoose";

const movie_string = "mongodb+srv://nrll:0Bl4cKStaRrrR@cluster0.ylkhqbp.mongodb.net/sample_mflix?retryWrites=true&w=majority";

const db = mongoose.connect(movie_string);

export default mongoose.connection;