import { services } from "../Services/index.js";


export const getAllFavoritesCtrl = async (_, res) => {
    try {
        const movies = await services.getAllFavorites();
        res.json({ success: true, result: movies })
    } catch (error) {
        res.json({ success: false, error: error })
    }
}