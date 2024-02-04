import express from "express";
import { controller } from "../controller/index.js";

// #############################################################################

const favoritesRouter = express.Router();

// ####################### getAllMovies #####################################

favoritesRouter.get("/", controller.getAllFavorites);

// ####################### getOneMovieByID ##################################

favoritesRouter.get("/:movieId", controller.getOneFavoriteById);

// ###################### searchMovieByInput ################################

favoritesRouter.get("/search/:searchInput", controller.searchFavoriteByInput);

// ########################### insertNewMovie ###############################

favoritesRouter.patch("/:movieId", controller.insertNewFavorite);

// ######################### deleteMovieById ################################

favoritesRouter.delete("/delete/:movieId", controller.deleteFavoriteById);

// ############################## editMovie #################################

favoritesRouter.put("/edit", express.json(), controller.editFavorite);

// #############################################################################

export default favoritesRouter