import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        id : {type: String},
        title : {type: String, required: true},
        writer : {type: mongoose.Schema.Types.ObjectId, ref: 'escritores', required: true},
        pagesNumber : {type: Number},
        publisher : {type: String, required: true},
    }
);

const books = mongoose.model('livros', bookSchema)

export default books;