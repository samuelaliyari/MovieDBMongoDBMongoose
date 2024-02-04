import * as dotenv from 'dotenv';
import { MongoClient } from "mongodb";


dotenv.config()

const URI = process.env.URI;

const client = new MongoClient(URI);

let _db;

export const getDB = async () => {
    if (_db) return _db
    await client.connect();
    const db = client.db("movieDB")
    _db = db
    return db
}