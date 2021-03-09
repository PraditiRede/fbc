import axios from 'axios';

const url = "http://localhost:4000/books";

export const fetchBooks = () => axios.get(url);
export const createBook = (newBook) => axios.post(url, newBook);

const urla = "https://www.googleapis.com/books/v1/volumes?q={search terms}";
export const getapiBooks = () => axios.get(urla);