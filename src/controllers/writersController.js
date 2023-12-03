import writers from "../models/Writer.js";

class WriterController {
    
    static listAllWriters = (req, res) => {
        writers.find((err, writers) => {
            res.status(200).json(writers)
        });
    }

    static findWriter = (req, res) => {
        const id = req.params.id;
        writers.findById(id, (err, writer) => {
            if(err) {
                res.status(400).send({message: `${err.message} - falha ao encontrar escritor.`});
            } else {
                res.status(200).send(writer.toJSON());
            }
        });
    }

    static registerWriter = (req, res) => {
        let writer = new writers(req.body);

        writer.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar escritor.`});
            } else {
                res.status(201).send(writer.toJSON());
            }
        });
    }

    static updateWriter = (req, res) => {
        const id = req.params.id;

        writers.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Escritor atualizado com sucesso'});
            } else {
                res.status(500).send({message: `${err.message} - falha ao cadastrar escritor.`});
            }
        });
    }

    static deleteWriter = (req, res) => {
        const id = req.params.id;

        writers.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Escritor removido com sucesso'});
            } else {
                res.status(500).send({message: err.message});
            }
        });
    }
}

export default WriterController;