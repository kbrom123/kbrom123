import express from 'express'
import { Book } from '../models/BookModels.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.send(books);
    } catch (error) {
        console.log(error)
    }
});
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.send(book);
    } catch (error) {
        console.log(error);
    }
});
router.post('/', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishedYear) {
            return res.status(400).send({ message: 'All fields are required' });
        }
        const book = new Book({
            title: req.body.title,
            author: req.body.author,
            publishedYear: req.body.publishedYear
        });
        const createdBook = await book.save();
        res.status(201).send(createdBook);

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});
router.put('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book) {
            book.title = req.body.title || book.title;
            book.author = req.body.author || book.author;
            book.publishedYear = req.body.publishedYear || book.publishedYear;
            const updatedBook = await book.save();
            res.send(updatedBook);
        } else {
            res.status(404).send({ message: 'Book Not Found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndDelete(id);
        if (book) {
            res.send({ message: 'Book Deleted' });
        } else {
            res.status(404).send({ message: 'Book Not Found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}
);
export default router