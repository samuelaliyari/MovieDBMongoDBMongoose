import { DAO } from "../Data-Access/index.js";


export const getAllMovies = async () => {
    const movies = await DAO.getAll("movies");
    return movies;
}