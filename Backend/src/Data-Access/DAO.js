import { ObjectId } from "mongodb"
import { Favorite, Movie } from "../models/index.js";
import mongoose from "mongoose";


// ################GET ALL DOCUMENTS OF A COLLECTION###################

export const getAll = async (collection) => {
    if (collection === "movies") {
        const result = await Movie.find();
        return result;
    }
    if (collection === "favorites") {
        const result = await Favorite.find();
        return result;
    }
}

// ################### GET A DOCUMENT USING ID ########################

export const getById = async (collection, id) => {
    if (collection === "movies") {
        const result = await Movie.findOne({ _id: ObjectId.createFromHexString(id) });
        return result;
    }
    if (collection === "favorites") {
        const result = await Favorite.findOne({ _id: ObjectId.createFromHexString(id) });
        return result;
    }
}

// ################ SEARCHING A TITLE USING CLIENT INPUT ###############

export const searchByKeyword = async (collection, input) => {
    if (collection === "movies") {
        const result = await Movie.find({ title: { $regex: input, $options: "i" } });
        return result;
    }
    if (collection === "favorites") {
        const result = await Favorite.find({ title: { $regex: input, $options: "i" } });
        return result;
    }

}

// ############ DELETE A DOCUMENT FROM A COLLECTION USING ID ############

export const deleteOneByID = async (collection, movieId) => {
    if (collection === "movies") {
        const result = await Movie.findOneAndDelete({ _id: ObjectId.createFromHexString(movieId) });
        return result;
    }
    if (collection === "favorites") {
        const result = await Favorite.findOneAndDelete({ _id: ObjectId.createFromHexString(movieId) });
        return result;
    }
}

// ############ INSERT A NEW DOCUMENT (FAVORITES OR ADD MOVIE) ###########

export const insertOne = async (movieNew) => {
    const result = await Movie.create(movieNew);
    return result;
}


export const addToCollection = async (movieId) => {
    const movie = await Movie.aggregate([{ $match: { _id: ObjectId.createFromHexString(movieId) } }, { $merge: "favorites" }]);
    return movie;
}

// ########################## EDIT A MOVIE DOCUMENT########################

export const editOne = async (collection, editedMovie) => {

    if (collection === "movies") {
        const id = editedMovie._id;
        console.log(editedMovie)
        delete editedMovie._id;
        const result = await Movie.findOneAndReplace({ _id: ObjectId.createFromHexString(id) }, editedMovie, { returnDocument: "after" });
        return result;
    }
    if (collection === "favorites") {
        const id = editedMovie._id;
        delete editedMovie._id;
        const result = await Favorite.findOneAndReplace({ _id: ObjectId.createFromHexString(id) }, editedMovie, { returnDocument: "after" });
        return result;
    }
}