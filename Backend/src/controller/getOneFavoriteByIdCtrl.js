import { services } from "../Services/index.js"

export const getOneFavoriteByIdCtrl = async (req, res) => {
    try {
        const movieId = req.params.movieId
        const movie = await services.getFavoriteByID(movieId)
        res.json({ success: true, result: movie })
    } catch (error) {
        console.log(error)
        res.json({ success: false, error: error })
    }
}