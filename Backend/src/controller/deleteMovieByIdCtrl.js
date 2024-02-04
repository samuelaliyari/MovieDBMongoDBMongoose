import { services } from "../Services/index.js";


export const deleteMovieByIdCtrl = async (req, res) => {
    try {
        const movieId = req.params.movieId;
        const deletedMovie = await services.deleteMovieById(movieId);
        res.json({ success: true, result: deletedMovie });
    } catch (error) {
        res.json({ success: false, error: error });
    }
}