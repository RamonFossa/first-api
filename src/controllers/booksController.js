import books from "../models/Book.js";

class BookController {
    
    static listAllBooks = (req, res) => {
        books.find()
            .populate('writer')
            .exec((err, books) => {
            res.status(200).json(books)
        });
    }

    static findBook = (req, res) => {
        const id = req.params.id;
        books.findById(id)
            .populate('writer', 'name')
            .exec((err, book) => {
            if(err) {
                res.status(400).send({message: `${err.message} - falha ao encontrar livro.`});
            } else {
                res.status(200).send(book.toJSON());
            }
        });
    }

    static registerBook = (req, res) => {
        let book = new books(req.body);

        book.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`});
            } else {
                res.status(201).send(book.toJSON());
            }
        });
    }

    static updateBook = (req, res) => {
        const id = req.params.id;

        books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Livro atualizado com sucesso'});
            } else {
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`});
            }
        });
    }

    static deleteBook = (req, res) => {
        const id = req.params.id;

        books.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Livro removido com sucesso'});
            } else {
                res.status(500).send({message: err.message});
            }
        });
    }

    static listBooksByPublisher = (req, res) => {
        const publisher = req.query.editora

        books.find({'publisher': publisher}, {}, (err, books) => {
            if(err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(books.toJSON());
            }
        })
    }
}

export default BookController;