import { DAO } from "../Data-Access/index.js"


// ################################################################

export const searchMovieByInput = async (input) => {
    const result = await DAO.searchByKeyword("movies", input);
    return result;
}

