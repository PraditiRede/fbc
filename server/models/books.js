const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    booktitle: {
        type: String,
    },
    author:{
        type: String,
    },
    publisher:{
        type: String,
    },
    isbn:{
        type: String,
    },
    tag:{
        type: String,
    },
    selectedFile:{
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("books", booksSchema);