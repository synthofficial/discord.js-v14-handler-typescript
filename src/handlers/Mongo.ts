import mongoose from "mongoose";
import { color } from "../functions.js";

module.exports = () => {
    const uri = process.env.MONGO_URL;
    if(!uri) return console.log(color("warn", `🔮 MongoDB URI Not found. ${color("info", "Please set this in .env")}`))
    mongoose.connect(`${uri}/${process.env.MONGO_DB_NAME}`)
    .then(() => console.log(color("info", `🔮 MongoDB ${color("variable", "connected!")}`)))
    .catch(() => console.log(color("info", `🔮 MongoDB ${color("error", "failed!")}`)))
}