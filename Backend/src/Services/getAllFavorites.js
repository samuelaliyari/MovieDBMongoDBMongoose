import { DAO } from "../Data-Access/index.js";


export const getAllFavorites = async () => {
    const favorites = await DAO.getAll("favorites");
    return favorites;
}