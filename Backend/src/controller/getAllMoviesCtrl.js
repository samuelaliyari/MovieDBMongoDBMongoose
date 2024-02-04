import { services } from "../Services/index.js";


export const getAllMoviesCtrl = async (_, res) => {
    try {
        const movies = await services.getAllMovies();
        res.json({ success: true, result: movies })
    } catch (error) {
        res.json({ success: false, error: error })
    }
}