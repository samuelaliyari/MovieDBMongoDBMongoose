import { services } from "../Services/index.js";



export const editMovieCtrl = async (req, res) => {
    const editedMovie = req.body;
    const result = await services.editMovie(editedMovie);
    res.json({ success: true, result: result })
}