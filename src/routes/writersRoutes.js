import express from "express";
import WriterController from "../controllers/writersController.js";

const router = express.Router();

router
    .get('/escritores', WriterController.listAllWriters)
    .get('/escritores/:id', WriterController.findWriter)
    .post('/escritores', WriterController.registerWriter)
    .put('/escritores/:id', WriterController.updateWriter)
    .delete('/escritores/:id', WriterController.deleteWriter)


export default router;