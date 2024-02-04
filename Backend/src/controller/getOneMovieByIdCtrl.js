import { services } from "../Services/index.js"




export const getOneMovieByIdCtrl = async (req, res) => {
    try {
        const movie = await services.getMovieByID(req.params.movieId)
        res.json({ success: true, result: movie })
    } catch (error) {
        res.json({ success: false, error: error })
    }
}