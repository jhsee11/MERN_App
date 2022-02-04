// routes/api/books.js

const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

//Load Book Model
const Book = require('../../models/Book');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('book route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', async (req, res) => {
  console.log('Get request is made');
  //const books = await Book.find();
  //res.send('Listing all books');

  //res.json(books);

  Book.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(404).json({ nobooksfound: 'No Books found' }));

  //;
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.get('/:id', async (req, res) => {
  console.log('Geting book by id');
  await Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(404).json({ nobookfound: 'No Book Found' }));
});

// @route POST api/books
// @description add/save book
// @access Public
router.post('/', async (req, res) => {
  await Book.create(req.body)
    .then((book) => res.json({ msg: 'Book added successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to add this book' }));
});

// @route PUT api/books/:id
// @description Update book
// @access Public
router.put('/:id', async (req, res) => {
  console.log('Going to update the book!');
  await Book.findByIdAndUpdate(req.params.id, req.body)
    .then((book) => res.json({ msg: 'Updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route DELETE api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', async (req, res) => {
  await Book.findByIdAndRemove(req.params.id, req.body)
    .then((book) => res.json({ mgs: 'Book entry deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No such a book' }));
});

module.exports = router;
