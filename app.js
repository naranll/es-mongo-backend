import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import movieRouter from "./routes/movie-route.js";
// import "./config/mongodb-config.js";
// import db from "./config/mongodb-config.js"
// import Movie from "./models/Movie.js"
import cloudinary from "./config/cloudinary.js";

const app = express();
const port = 7000;

app.use(bodyParser.json());
app.use(cors());
app.use(movieRouter);


const res = cloudinary.v2.uploader.upload(
    '',
    { public_id: "olympic_flag" })

res.then((data) => {
    console.log(data);
    console.log(data.secure_url);
}).catch((err) => {
    console.log(err);
});

app.listen(port, () => console.log(`listening on ${port}`));

//Used to automatically load database without router
/*
db.once("open", () => {
    Movie.find({})
        .limit(1)
        .then((movies) => console.log("movies", movies));
});

db.on("error", () => {
    console.log("Error getting movies")
});
*/