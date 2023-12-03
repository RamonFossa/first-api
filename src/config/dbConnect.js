import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Xerly:123@xerlylab.q3gylb4.mongodb.net/xerly-node");

let db = mongoose.connection;

export default db;