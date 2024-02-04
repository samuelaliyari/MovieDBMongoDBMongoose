import express from "express";
import { controller } from "../controller/index.js";

// #############################################################################

const moviesRouter = express.Router();

// ####################### getAllMovies #####################################

moviesRouter.get("/", controller.getAllMovies);

// ####################### getOneMovieByID ##################################

moviesRouter.get("/:movieId", controller.getOneMovieByID)

// ###################### searchMovieByInput ################################

moviesRouter.get("/search/:searchInput", controller.searchMovieByInput)

// ########################### insertNewMovie ###############################

moviesRouter.post("/", express.json(), controller.insertNewMovie)

// ######################### deleteMovieById ################################

moviesRouter.delete("/delete/:movieId", controller.deleteMovieById)

// ############################## editMovie #################################

moviesRouter.put("/edit", express.json(), controller.editMovie)

// #############################################################################

export default moviesRouter