import { DAO } from "../Data-Access/index.js"


// ######################################################################

export const insertNewFavorite = async (favoriteId) => {
    const favorite = await DAO.addToCollection(favoriteId);
    return favorite;
}