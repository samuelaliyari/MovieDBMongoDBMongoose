import { services } from "../Services/index.js"




export const insertNewMovieCtrl = async (req, res) => {
    try {
        const movieNew = req.body
        const addedMovie = await services.insertNewMovie(movieNew)
        res.json({ success: true, result: addedMovie })
    } catch (error) {
        res.json({ success: false, error: error })
    }
}