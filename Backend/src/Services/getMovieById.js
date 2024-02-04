import { DAO } from "../Data-Access/index.js"

// ######################################################################

export const getMovieByID = async (movieID) => {
    const movie = await DAO.getById("movies", movieID);
    return movie;
} 