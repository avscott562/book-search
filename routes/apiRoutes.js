// require dependencies
const express = require('express');
const router = express.Router();

// pull in book model
const Book = require("../models/book");

// @route GET /api/books
// get all books
router.get('/', (req, res) => {
    Book.find()
        .sort({ title: 1 })
        .then(books => res.json(books))
});

// @route POST /api/books
// save a new book to the database
router.post('/', (req, res) => {
    const newBook = new Book({
        title: req.body.title,
        authors: req.body.authors,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link
    });

    newBook.save()
        .then(book => res.json(book));
});

// @route DELETE /api/books/:id
// delete a book
router.delete('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => book.remove()
        .then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;