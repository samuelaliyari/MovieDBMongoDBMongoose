

import { deleteFavoriteByIdCtrl } from "./deleteFavoriteByIdCtrl.js";
import { deleteMovieByIdCtrl } from "./deleteMovieByIdCtrl.js";
import { editFavoriteCtrl } from "./editFavoriteCtrl.js";
import { editMovieCtrl } from "./editMovieCtrl.js";
import { getAllFavoritesCtrl } from "./getAllFvoritesCtrl.js";
import { getAllMoviesCtrl } from "./getAllMoviesCtrl.js";
import { getOneFavoriteByIdCtrl } from "./getOneFavoriteByIdCtrl.js";
import { getOneMovieByIdCtrl } from "./getOneMovieByIdCtrl.js";
import { insertNewFavoriteCtrl } from "./insertNewFavoriteCtrl.js";
import { insertNewMovieCtrl } from "./insertNewMovieCtrl.js";
import { searchFavoriteByInputCtrl } from "./searchFavoriteByInputCtrl.js";
import { searchMovieByInputCtrl } from "./searchMovieByInputCtrl.js";

// ##################################################################

export const controller = {
    searchFavoriteByInput: searchFavoriteByInputCtrl,
    deleteFavoriteById: deleteFavoriteByIdCtrl,
    insertNewFavorite: insertNewFavoriteCtrl,
    getOneFavoriteById: getOneFavoriteByIdCtrl,
    editFavorite: editFavoriteCtrl,
    getAllFavorites: getAllFavoritesCtrl,
    getAllMovies: getAllMoviesCtrl,
    getOneMovieByID: getOneMovieByIdCtrl,
    searchMovieByInput: searchMovieByInputCtrl,
    insertNewMovie: insertNewMovieCtrl,
    deleteMovieById: deleteMovieByIdCtrl,
    editMovie: editMovieCtrl
}