import { services } from "../Services/index.js";



export const editFavoriteCtrl = async (req, res) => {
    const editedMovie = req.body;
    const result = await services.editFavorite(editedMovie);
    res.json({ success: true, result: result })
}