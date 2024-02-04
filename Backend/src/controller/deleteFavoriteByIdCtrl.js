import { services } from "../Services/index.js";


export const deleteFavoriteByIdCtrl = async (req, res) => {
    try {
        const movieId = req.params.movieId;
        const deletedMovie = await services.deleteFavoriteById(movieId);
        res.json({ success: true, result: deletedMovie });
    } catch (error) {
        res.json({ success: false, error: error });
    }
}