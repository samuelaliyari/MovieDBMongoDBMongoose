import { DAO } from "../Data-Access/index.js"

// ######################################################################

export const deleteMovieById = async (movieId) => {
    const result = await DAO.deleteOneByID("movies", movieId);
    return result;
}