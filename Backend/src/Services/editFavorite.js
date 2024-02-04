import { DAO } from "../Data-Access/index.js";


export const editFavorite = async (editedFavorite) => {
    const result = await DAO.editOne("favorites", editedFavorite);
    console.log(result)
    return result;
}
