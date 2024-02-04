import { DAO } from "../Data-Access/index.js"


// ################################################################

export const searchFavoriteByInput = async (input) => {
    const result = await DAO.searchByKeyword("favorites", input);
    return result;
}

