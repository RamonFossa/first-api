import mongoose from "mongoose";

const writerSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        country: {type: String}
    },
    {
        versionKey: false
    }
);

const writers = mongoose.model('escritores', writerSchema);

export default writers;