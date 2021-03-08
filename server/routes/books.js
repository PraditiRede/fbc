const router = require("express").Router();

const handlersBooks = require("../handlers/books");

router.get('/books', handlersBooks.getBooks);
router.post('/books', handlersBooks.postBooks);

module.exports = router;