import { services } from "../Services/index.js"




export const insertNewFavoriteCtrl = async (req, res) => {
    try {
        const movieId = req.params.movieId
        const addedMovie = await services.insertNewFavorite(movieId)
        res.json({ success: true, result: addedMovie })
    } catch (error) {
        console.log(error)
        res.json({ success: false, error: error })
    }
}