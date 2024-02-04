import { DAO } from "../Data-Access/index.js"

// ######################################################################

export const deleteFavoriteById = async (movieId) => {
    const result = await DAO.deleteOneByID("favorites", movieId);
    return result;
}