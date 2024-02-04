import { DAO } from "../Data-Access/index.js";




export const editMovie = async (editedMovie) => {
    const result = await DAO.editOne("movies", editedMovie);
    return result;
}
