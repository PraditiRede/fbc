const booksdb = require("../models/books");

exports.getBooks = async (req, res) => {
    try{
        const postbooks = await booksdb.find();
        res.status(200).json(postbooks);
    } catch(error){
        res.status(404).json({message: error.message});
    }
}

exports.postBooks = async (req, res) => {
    const books = req.body;
    const newBooks = new booksdb(books);
    try{
        await newBooks.save();
        res.status(201).json(newBooks);
    }catch(error){
        res.status(409).json({message: error.message});
    }
}