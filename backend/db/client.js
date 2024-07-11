import mongoose from "mongoose";

// import { mongoDBURL } from "../config.js";
import { mongoDBURL } from "./url.js";

export default function connectDB() {
        mongoose
        .connect(mongoDBURL)
        .then(() =>{
            console.log('App connected to database');
        })
        .catch((error) => {
            console.log(error)
    })
}