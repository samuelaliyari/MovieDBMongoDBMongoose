import express from "express";
import cors from "cors";
import morgan from "morgan";
import multer from "multer";
import { favoritesRouter, moviesRouter } from "./router/index.js";
import * as dotenv from 'dotenv';
import mongoose from "mongoose";


dotenv.config();



dotenv.config()


const app = express();

app.use(cors());

app.use(morgan("dev"));


const PORT = process.env.PORT




app.use("/api/v1/movies", moviesRouter.default)

app.use("/api/v1/favorites", favoritesRouter.default)


const runServer = app.listen(PORT, console.log("APP RUNNING @ port: " + PORT))

const connectDB = async () => {
    console.log("DB connecting ...")
    await mongoose.connect(process.env.URI, { dbName: "movieDB" })
}


connectDB()
    .then(() => console.log("DB connection succeeded, Starting the Server on port: " + PORT))
    .then(runServer)
    .then(console.log("Server Running @ port : " + PORT))
    .catch(err => {
        console.log(err)
        mongoose.disconnect()
    })
