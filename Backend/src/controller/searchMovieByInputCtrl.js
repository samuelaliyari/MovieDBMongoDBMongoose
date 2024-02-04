import { services } from "../Services/index.js";



export const searchMovieByInputCtrl = async (req, res) => {
    try {
        const searchInput = req.params.searchInput;
        const foundMovies = await services.searchMovieByInput(searchInput)
        res.json({ success: true, result: foundMovies })
    } catch (error) {
        res.json({ success: fasle, error: error })
    }
}