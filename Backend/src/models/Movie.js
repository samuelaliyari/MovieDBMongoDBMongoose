import mongoose from "mongoose";



const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    rated: { type: String, default: "UNRATED" },
    runtime: { type: Number, default: 120 },
    countries: [{ type: String }],
    genres: [{ type: String }],
    director: { type: String, required: true },
    writers: [{ type: String }],
    actors: [{ type: String }],
    plot: { type: String, required: true },
    poster: { type: String, required: true },
    imdb: {
        id: { type: String },
        rating: { type: Number, min: 1, max: 10, required: true },
        votes: { type: Number }
    },
    tomato: { type: Object },
    metacritic: { type: Number },
    awards: { type: Object },
    type: { type: String }

}, { collection: "movies", timestamps: true });

const Movie = mongoose.model("Movie", movieSchema)

export default Movie