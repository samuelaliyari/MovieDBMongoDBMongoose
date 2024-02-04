import { DAO } from "../Data-Access/index.js"

// ######################################################################

export const getFavoriteByID = async (favoriteID) => {
    const favorite = await DAO.getById("favorites", favoriteID);
    return favorite;
} 