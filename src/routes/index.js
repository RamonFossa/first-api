import express from "express";
import books from "./booksRoutes.js"
import writers from "./writersRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({title: "Curso de node"});
    });

    app.use(
        express.json(),
        books, 
        writers
    );
}

export default routes;